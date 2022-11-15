import { Device } from "./Device";

class DeviceBuilder {
  private _serialNumber!: string;
  private _name!: string;
  private _publicKey!: string;

  setSerialNumber(serialNumber: string) {
    this._serialNumber = serialNumber;
    return this;
  }

  setName(name: string) {
    this._name = name;
    return this;
  }

  setPublicKey(publicKey: string) {
    this._publicKey = publicKey;
    return this;
  }

  getResult(): Device {
    const device = new Device();

    device.setSerialNumber(this._serialNumber);
    device.setName(this._name);
    device.setPublicKey(this._publicKey);

    return device;
  }
}

export { DeviceBuilder };
