import type { Ref } from 'vue'

export interface ProvideAccordion {
  type?: string;
  current: Ref<string[] | null>;
}