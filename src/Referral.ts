import { v4 as uuidV4 } from "uuid";
import { Study } from "./Study";
import { Patient } from "./Patient";
import { Survey } from "./Survey";

export class Referral {
  private _referralId!: string;
  private _referralCode!: string;
  private _study!: Study;
  private _patient!: Patient;
  private _survey!: Survey;

  get referralId() {
    return this._referralId;
  }

  get referralCode() {
    return this._referralCode;
  }

  get study() {
    return this._study;
  }

  get patient() {
    return this._patient;
  }

  get survey() {
    return this._survey;
  }

  setReferralId(id: string = uuidV4()) {
    this._referralId = id;
  }

  setReferralCode(referralCode: string) {
    this._referralCode = referralCode;
  }

  setStudy(study: Study) {
    this._study = study;
  }

  setPatient(patient: Patient) {
    this._patient = patient;
  }
}
