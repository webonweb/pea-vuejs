import type { Ref } from 'vue'

export interface ProvideTooltip {
  visible: Ref<boolean>
  position: 'top' | 'left' | 'bottom' | 'right'
}