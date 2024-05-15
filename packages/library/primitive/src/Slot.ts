import { cloneVNode, defineComponent, mergeProps } from 'vue'
import { renderSlotFragments } from './renderSlotFragments'

export const Slot = defineComponent({
  name: 'PrimitiveSlot',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => {
      if (!slots.default) return null
      const childrens = renderSlotFragments(slots.default())

      const [firstChildren, ...otherChildren] = childrens

      if (Object.keys(attrs).length > 0) {
        delete firstChildren.props?.ref
        const mergedProps = mergeProps(attrs, firstChildren.props ?? {})
        if (attrs.class && firstChildren.props?.class) delete firstChildren.props.class

        const cloned = cloneVNode(firstChildren, mergedProps)

        for (const prop in mergedProps) {
          if (prop.startsWith('on')) {
            cloned.props ||= {}
            cloned.props[prop] = mergedProps[prop]
          }
        }

        return childrens.length === 1 ? cloned : [cloned, ...otherChildren]
      }

      return childrens
    }
  }
})
