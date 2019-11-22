import { TypographySerializer } from "./types";

export class BaseSerializer implements TypographySerializer {
  serialize(payload: string) {
    return payload;
  }

  normalize(payload: string) {
    return payload;
  }
}

export default BaseSerializer;
