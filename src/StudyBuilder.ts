import { v4 as uuidV4 } from "uuid";
import { Patient } from "./Patient";
import { Study } from "./Study";

class StudyBuilder {
  private _studyId!: string;
  private _patient?: Patient;
  private _name!: string;
  private _studyCode!: string;

  setStudyId(studyId: string = uuidV4()) {
    this._studyId = studyId;
    return this;
  }

  setName(name: string) {
    this._name = name;
    return this;
  }

  setStudyCode(studyCode: string) {
    this._studyCode = studyCode;
    return this;
  }

  setPatient(item: Patient) {
    this._patient = item;
    return this;
  }

  getResult(): Study {
    return new Study(this._studyId, this._name, this._studyCode, this._patient);
  }
}

export { StudyBuilder };
