export type TypographySerializer = {
  /**
   * Converts typorgapher object onto typography provider object.
   * @param payload Typography result
   */
  serialize(payload: string): string;

  /**
   * Converts typography provider result into the typorgapher object.
   * @param payload Typography result
   */
  normalize(payload: Object): string;
};
