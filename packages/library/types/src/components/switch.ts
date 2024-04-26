import type { Ref } from 'vue'

export interface ProvideSwitch {
  checked?: Ref<string>;
}

export enum ThumbPosition {
  LEFT = 'left',
  RIGHT = 'right'
}