import { type Component } from 'vue'

export type PrimitiveType =
  | 'a'
  | 'button'
  | 'div'
  | 'form'
  | 'h2'
  | 'h3'
  | 'img'
  | 'input'
  | 'label'
  | 'li'
  | 'nav'
  | 'ol'
  | 'p'
  | 'span'
  | 'svg'
  | 'ul'
  | 'template'
  | ({} & string) // any other string

export interface PrimitiveProps {
  asChild?: boolean
  as?: PrimitiveType | Component
}
