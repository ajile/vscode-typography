import { TypographyProvider, TypographyRequestData, TypographyRequestOptions } from "./types";

export class BaseProvider implements TypographyProvider {
  async request(payload: TypographyRequestData, options: TypographyRequestOptions) {
    return "";
  }
}

export default BaseProvider;
