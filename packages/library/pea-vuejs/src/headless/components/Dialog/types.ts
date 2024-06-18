import type { ModelRef, Ref } from 'vue'

export interface ProvideDialog {
  id: string
  open: ModelRef<boolean>
  visible: Ref<boolean>
  static: boolean
}