import { RegistryItem } from "./types";

export class TypographerStore {
  registry = new Map<string, RegistryItem>();

  register(name: string, parts: RegistryItem) {
    this.registry.set(name, parts);
  }

  unregister(name: string) {
    this.registry.delete(name);
  }

  serializerFor(name: string) {
    const item = this.registry.get(name);
    return item && item.serializer;
  }

  providerFor(name: string) {
    const item = this.registry.get(name);
    return item && item.provider;
  }

  static instance: TypographerStore;
  static getInstance() {
    if (!this.instance) {
      this.instance = new TypographerStore();
    }
    return this.instance;
  }
}
