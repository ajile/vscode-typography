import BaseSerializer from "./base";

export class LebedevSerializer extends BaseSerializer {
  normalize(payload: string) {
    return payload;
  }
}

export default LebedevSerializer;
