<template>
  <Transition name="fade-in" @after-leave="onAfterLeave">
    <Primitive
      v-show="options?.visible.value"
      :as="as"
      :as-child="asChild"
      v-bind="bindings"
    >
      <slot />
    </Primitive>
  </Transition>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface PanelDialogProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { ProvideDialog } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<PanelDialogProps>(), {
  as: "div",
});

const options = inject<ProvideDialog>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    role: "document",
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});

const onAfterLeave = () => (options.open.value = false);
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
