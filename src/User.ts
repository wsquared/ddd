import { v4 as uuidV4 } from "uuid";

class User {
  private _userId!: string;
  private _name!: string;
  private _firstName!: string;
  private _lastName!: string;

  get name() {
    return this._name;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get userId() {
    return this._userId;
  }

  setUserId(id: string = uuidV4()) {
    this._userId = id;
  }

  setName(firstName: string, lastName: string) {
    if (this.validName(firstName) && this.validName(lastName)) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._name = `${firstName} ${lastName}`;
    }
  }

  private validName(name: string) {
    if (name.length > 0 && /^[a-zA-Z]+$/.test(name)) {
      return true;
    } else {
      throw new Error(`${name} is an invalid name format`);
    }
  }
}

export { User };
