import { v4 as uuidV4 } from "uuid";
import { Patient } from "./Patient";

class PatientBuilder {
  private _userId!: string;
  private _patientId!: string;
  private _patientCode!: string;
  private _firstName!: string;
  private _lastName!: string;

  setUserId(userId: string = uuidV4()) {
    this._userId = userId;
    return this;
  }

  setPatientId(patientId: string = uuidV4()) {
    this._patientId = patientId;
    return this;
  }

  setName(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    return this;
  }

  setPatientCode(patientCode: string) {
    this._patientCode = patientCode;
    return this;
  }

  getResult(): Patient {
    const patient = new Patient();

    patient.setUserId(this._userId);
    patient.setPatientId(this._patientId);
    patient.setName(this._firstName, this._lastName);
    patient.setPatientCode(this._patientCode);

    return patient;
  }
}

export { PatientBuilder };
