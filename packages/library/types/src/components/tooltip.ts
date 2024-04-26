import type { Ref } from 'vue'

export enum TooltipPosition {
  TOP = 'TOP',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  BOTTOM = 'BOTTOM'
}

export interface ProvideTooltip {
  visible: Ref<boolean>
  position: TooltipPosition
}