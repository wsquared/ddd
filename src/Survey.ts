type IField = {
  [key: string]: string;
}

export class Survey {
  private _surveyFields: IField[];

  constructor(surveyFields: IField[]) {
    this._surveyFields = surveyFields;
  }

  get surveyFields() {
    return this._surveyFields;
  }

  setSurveyFields(surveyFields: IField[]) {
    this._surveyFields = surveyFields;
  }
}
