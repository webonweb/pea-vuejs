import { h, defineComponent } from 'vue'
import type { Component, PropType } from 'vue'
import type { PrimitiveType } from './types'
import { Slot } from './Slot'

export const Primitive = defineComponent({
  name: 'Primitive',
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false
    },
    as: {
      type: [String, Object] as PropType<PrimitiveType | Component>,
      default: 'div'
    }
  },
  setup(props, { attrs, slots }) {
    const asTag = props.asChild ? 'template' : props.as

    if (asTag !== 'template') return () => h(props.as, attrs, { default: slots.default })

    return () => h(Slot, attrs, { default: slots.default })
  }
})
