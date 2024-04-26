import type { Ref } from 'vue'

export interface ProvideTextWrappper {
  visible?: Ref<boolean>
  max: number
  text: string
}
