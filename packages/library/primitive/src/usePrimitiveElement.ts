import { type ComponentPublicInstance, ref } from 'vue'

export const usePrimitiveElement = () => {
  const primitiveElement = ref<ComponentPublicInstance>()

  return {
    primitiveElement
  }
}
