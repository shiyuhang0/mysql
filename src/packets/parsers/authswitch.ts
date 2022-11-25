import {BufferReader, BufferWriter} from "../../buffer.ts";
import ServerCapabilities from "../../constant/capabilities.ts";

/** @ignore */
export interface authSwitchBody {
  status: number;
  authPluginName: string;
  authPluginData: Uint8Array;
}

/** @ignore */
export function parseAuthSwitch(reader: BufferReader): authSwitchBody {
  const status = reader.readUint8();
  const authPluginName = reader.readNullTerminatedString();
  const authPluginData = reader.readRestOfPacketString();

  return {
    status,
    authPluginName,
    authPluginData
  };
}