import type { ModelRef, Ref } from 'vue'

export interface ProvideDrawer {
  id: string
  open: ModelRef<boolean>
  visible: Ref<boolean>
  static: boolean
}