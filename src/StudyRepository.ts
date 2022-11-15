import { BaseRepository } from "./BaseRepository";
import { Study } from "./Study";
import { db } from "./Db";
import { StudyBuilder } from "./StudyBuilder";
import { PatientBuilder } from "./PatientBuilder";
import { DeviceRepository } from "./DeviceRepository";

type IStudyMeta = {
  id: string;
  name: string;
  study_code: string;
  patient_id: string;
};

type IPatientMeta = {
  id: string;
  user_id: string;
  patient_code: string;
};

type IUserMeta = {
  id: string;
  full_name: string;
};

class StudyRepository implements BaseRepository<Study> {
  private _deviceRepository: DeviceRepository;

  constructor(deviceRepository = new DeviceRepository()) {
    this._deviceRepository = deviceRepository;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  find(_item: Study): Promise<Study[]> {
    throw new Error("Method not implemented.");
  }
  create(item: Study): Promise<boolean> {
    return db.insert(item);
  }
  update(id: string, item: Study): Promise<boolean> {
    return db.where("id", id).update(item);
  }
  delete(id: string): Promise<boolean> {
    return db.where("id", id).update("deleted", Date.now());
  }



  async findOne(id: string): Promise<Study> {
    const studyMeta = await db<IStudyMeta>("studies").where("id", id).first();

    if (!studyMeta) {
      throw new Error(`study with ${id} not found.`);
    }

    const study = new StudyBuilder()
      .setStudyId(studyMeta.id)
      .setName(studyMeta.name)
      .setStudyCode(studyMeta.study_code)
      .getResult();

    const patientMeta = await db<IPatientMeta>("patients")
      .where("id", studyMeta.patient_id)
      .first();

    if (!patientMeta) {
      return study;
    }

    const userMeta = await db<IUserMeta>("users")
      .where("id", patientMeta.user_id)
      .first();

    if (!userMeta) {
      throw new Error(`user with ${patientMeta.user_id} not found.`);
    }

    const patientBuilder = new PatientBuilder();

    const [firstName, lastName] = userMeta.full_name.split(" ");

    const patient = patientBuilder
      .setUserId(userMeta.id)
      .setPatientId(patientMeta.id)
      .setName(firstName, lastName)
      .setPatientCode(patientMeta.patient_code)
      .getResult();

    const device = await this._deviceRepository.findOneByStudy(study.id);

    study.setPatient(patient);
    study.setDevice(device);

    return study;
  }
}

export { StudyRepository };
