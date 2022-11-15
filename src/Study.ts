import { v4 as uuidV4 } from "uuid";
import { PatientBuilder } from "./PatientBuilder";
import { Patient } from "./Patient";
import { Device } from "./Device";

export class Study {
  private _studyId!: string;
  private _name!: string;
  private _studyCode!: string;
  private _patient?: Patient;
  private _device?: Device;

  constructor(id: string, name: string, studyCode: string, patient?: Patient) {
    this.setStudyId(id);
    this.setName(name);
    this.setStudyCode(studyCode);
    if (patient) {
      this.setPatient(patient);
    }
  }

  setStudyId(id: string = uuidV4()) {
    this._studyId = id;
  }

  setName(name: string) {
    this._name = name;
  }

  setStudyCode(studyCode: string) {
    this._studyCode = studyCode;
  }

  setDevice(device: Device) {
    this._device = device;
  }

  setPatient({ userId, patientId, firstName, lastName, patientCode }: Patient) {
    this._patient = new PatientBuilder()
      .setUserId(userId)
      .setPatientId(patientId)
      .setName(firstName, lastName)
      .setPatientCode(patientCode)
      .getResult();
  }

  get device() {
    return this._device;
  }

  get id() {
    return this._studyId;
  }

  get name() {
    return this._name;
  }

  get studyCode() {
    return this._studyCode;
  }

  get patient() {
    return this._patient;
  }
}
