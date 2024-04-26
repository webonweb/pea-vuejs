import type { ComputedRef, Ref } from 'vue'

export interface ProvideLoadList {
  lazy: boolean
  more: ComputedRef<boolean>,
  empty: ComputedRef<boolean>,
  pending: ComputedRef<boolean>
}