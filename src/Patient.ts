import { v4 as uuidV4 } from "uuid";
import { User } from "./User";

class Patient extends User {
  private _patientId!: string;
  private _patientCode!: string;

  get patientId() {
    return this._patientId;
  }

  get patientCode() {
    return this._patientCode;
  }

  setPatientId(id: string = uuidV4()) {
    this._patientId = id;
  }

  setPatientCode(patientCode: string) {
    this._patientCode = patientCode;
  }
}

export { Patient }