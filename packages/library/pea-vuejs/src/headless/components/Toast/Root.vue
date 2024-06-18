<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="fade-in" @after-enter="onAfterEnter">
        <Primitive
          v-if="visible"
          :as="as"
          :as-child="asChild"
          v-bind="bindings"
        >
          <slot />
        </Primitive>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface RootToastProps extends PrimitiveProps {
  class?: string;
  id: string;
  ttl?: number;
  static?: boolean;
}
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootToastProps>(), {
  as: "aside",
  ttl: 3000,
  static: false,
});

const visible = defineModel<boolean>("visible", { required: true });

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    id: props.id,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});

const onAfterEnter = () => {
  if (props.static && !visible.value) {
    return;
  }
  let time: ReturnType<typeof setTimeout> | null = null;
  time = setTimeout(() => {
    visible.value = false;
    // @ts-ignore
    clearTimeout(time);
  }, props.ttl);
};
</script>

<style lang="scss" scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.4s;
}
.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
