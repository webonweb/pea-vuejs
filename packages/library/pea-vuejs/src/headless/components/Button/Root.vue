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
  disabled?: boolean;
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
        : resolveComponent("NuxtLink") || resolveComponent("RouterLink"),
    type: props.type || "button",
    "aria-label": props.ariaLabel || undefined,
    "aria-disabled": props.disabled || undefined,
    title: props.title || props.ariaLabel || undefined,
    disabled: props.disabled,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  if (bindings.as === "a" && !bindings.disabled) {
    bindings.href = props.to || undefined;
  }

  if (bindings.as !== "a" && bindings.as !== "button" && !bindings.disabled) {
    bindings.to = props.to || undefined;
  }

  return bindings;
});
</script>
