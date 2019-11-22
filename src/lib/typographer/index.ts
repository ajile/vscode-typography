import * as types from "./types";
import { TypographerStore } from "./store";

const defaultOptions: types.TypographyOptions = {
  charType: types.CharType.Ready
};

export class Typographer implements types.TypographyBehaviour {
  providerName: string;

  /**
   * The options uses when typographer didn't get any options to typogragh.
   */
  options = defaultOptions;

  /**
   * The store with all typographers.
   */
  store = TypographerStore.getInstance();

  constructor(providerName: string, options?: Partial<types.TypographyOptions>) {
    this.providerName = providerName;
    this.options = { ...defaultOptions, ...options };
  }

  async typograph(text: string, options?: Partial<types.TypographyOptions>) {
    const serializer = this.store.serializerFor(this.providerName);
    const provider = this.store.providerFor(this.providerName);

    if (!serializer) {
      throw new Error(`There is no serializer named “${this.providerName}”`);
    }

    if (!provider) {
      throw new Error(`There is no provider named “${this.providerName}”`);
    }

    const result = await provider.request(serializer.serialize(text), { ...this.options, ...options });

    return serializer.normalize(result);
  }
}
