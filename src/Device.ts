class Device {

  private _serialNumber!: string
  private _name!: string
  private _publicKey!: string

  setSerialNumber(serialNumber: string) {
    this._serialNumber = serialNumber;
  }

  setName(name: string) {
    this._name = name;
  }

  setPublicKey(publicKey: string) {
    this._publicKey = publicKey;
  }
}

export { Device }