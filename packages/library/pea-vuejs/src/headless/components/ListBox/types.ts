import type { ModelRef } from 'vue'

export interface ProvideListbox {
  selected: ModelRef<string[]>
}

export interface ListBoxItem {
  label: string
  key: string
  disabled?: boolean
}
