<template>
  <Primitive v-bind="bindings" v-on="$attrs">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface RootButtonProps extends PrimitiveProps {
  to?: string;
  type?: string;
  class?: string;
  title?: string;
  ariaLabel?: string;
}
</script>

<script lang="ts" setup>
import { computed, resolveComponent } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootButtonProps>(), {
  as: "button",
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    as: !props.to
      ? "button"
      : props.to?.includes("http")
        ? "a"
        : resolveComponent("NuxtLink"),
    type: props.type || "button",
    "aria-label": props.ariaLabel || undefined,
    title: props.title || props.ariaLabel || undefined,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  if (bindings.as === "a") {
    bindings.href = props.to || undefined;
  }

  if (bindings.as !== "a" && bindings.as !== "button") {
    bindings.to = props.to || undefined;
  }

  return bindings;
});
</script>
