import { BaseRepository } from "./BaseRepository";
import { db } from "./Db";
import { Device } from "./Device";
import { DeviceBuilder } from "./DeviceBuilder";

// type IDeviceLogMeta = {
//   id: string;
//   device_id: string;
//   payload: string;
// };

type IDeviceMeta = {
  id: string;
  serial_number: string;
  name: string;
  public_key: string;
};

class DeviceRepository implements BaseRepository<Device> {
  create(item: Device): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: Device): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  find(item: Device): Promise<Device[]> {
    throw new Error("Method not implemented.");
  }
  async findOne(id: string): Promise<Device> {
    const deviceMeta = await db<IDeviceMeta>("devices").where("id", id).first();

    const deviceBuilder = new DeviceBuilder();

    if (!deviceMeta) {
      throw new Error(`device with ${id} not found.`);
    }

    const device = deviceBuilder
      .setName(deviceMeta.name)
      .setPublicKey(deviceMeta.public_key)
      .setSerialNumber(deviceMeta.serial_number)
      .getResult();

    return device;
  }

  async findOneByStudy(id: string) {
    const deviceMeta = await db<IDeviceMeta>("device_studies")
      .select("devices.*")
      .leftJoin("devices", "devices.id", "device_studies.device_id")
      .where("device_studies.study_id", id)
      .first();

    if (!deviceMeta) {
      throw new Error(`device with ${id} not found.`);
    }

    const deviceBuilder = new DeviceBuilder();

    const device = deviceBuilder
      .setName(deviceMeta.name)
      .setPublicKey(deviceMeta.public_key)
      .setSerialNumber(deviceMeta.serial_number)
      .getResult();

    return device;
  }
}

export { DeviceRepository };
