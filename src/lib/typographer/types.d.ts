export const enum CharType {
  Numbers,
  Unicode,
  Ready
}

export type TypographyOptions = {
  /**
   * How to replace special chars.
   */
  charType: CharType;
};

interface TypographyBehaviour {
  /**
   * Method typograph given text.
   * @param text Original text that need to be typographed
   * @param options An object with typography options (e.g. use ready char)
   */
  typograph(text: string, options?: Partial<TypographyOptions>): Promise<string>;
}
