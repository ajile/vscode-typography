import { TypographySerializer } from "../serializers/types";
import { TypographyProvider } from "../providers/types";

export type RegistryItem = {
  serializer: TypographySerializer;
  provider: TypographyProvider;
};
