<template>
  <Transition name="fade-in" @after-leave="onAfterLeave">
    <Primitive
      v-if="options?.active.value === props.id"
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
export interface ContentTabsProps extends PrimitiveProps {
  class?: string;
  id: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import { Primitive } from "@pea-vuejs/primitive";
import type { ProvideTabs } from "@pea-vuejs/types/src/components/tabs";

const props = withDefaults(defineProps<ContentTabsProps>(), {
  as: "div",
});

const options = inject<ProvideTabs>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    tabindex: "0",
    role: "tabpanel",
    "aria-labelledby": props.id,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  if (options.active.value !== props.id) {
    bindings.hidden = true;
  }

  return bindings;
});

const onAfterLeave = () => {
  options.active.value = options?.next?.value;
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
