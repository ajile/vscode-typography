import { TypographyOptions } from "../types";

export type TypographyRequestData = string;
export type TypographyRequestOptions = TypographyOptions;

export interface TypographyProvider {
  request(payload: TypographyRequestData, options: TypographyRequestOptions): Promise<string>;
}
