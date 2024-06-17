<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface RootTabsProps extends PrimitiveProps {
  class?: string;
  ariaLabel: string;
  isolate?: boolean;
}
</script>

<script lang="ts" setup>
import type { ProvideTabs } from "./types";
import { computed, ref, provide } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootTabsProps>(), {
  as: "div",
});

const active = defineModel<string | undefined>("active", {
  required: true,
  set: (value: string | undefined) => {
    if (props?.isolate) {
      emit("on:change", active.value as string);
    }
    return value;
  },
});

const next = ref<string | undefined>(undefined);

provide<ProvideTabs>("options", {
  isolate: props.isolate,
  active,
  next,
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    role: "tablist",
    "aria-label": props.ariaLabel,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});

const emit = defineEmits<{
  (e: "on:change", active: string): void;
}>();
</script>
