import type { ModelRef, Ref } from 'vue'

export interface ProvideTabs {
  isolate?: boolean;
  active?: ModelRef<string | undefined>;
  next?: Ref<string | undefined>;
}

export interface TabItem {
  id: string;
  label: string;
  disabled?: boolean
}