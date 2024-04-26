import type { Ref } from 'vue'

export enum AccordionTypes {
  SINGLE = 'single',
  MULTI = 'multi'
}

export interface ProvideAccordion {
  type?: string;
  current: Ref<string[] | null>;
}