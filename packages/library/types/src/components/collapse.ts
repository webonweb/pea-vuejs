import type { ModelRef } from 'vue'

export interface ProvideSwitch {
  open: ModelRef<boolean>;
  id: string
}