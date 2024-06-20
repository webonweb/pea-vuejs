<template>
  <Card.Root
    :id="id"
    :type="type"
    class="w-full rounded transition-shadow bg-pea-surface-white"
    :class="[
      schemeClasses,
      {
        'hover:shadow-md': shadow === 'hover',
        'shadow-md': shadow === 'static',
      },
    ]"
  >
    <div
      class="py-4 px-6 flex justify-between border-b border-b-pea-surface-black/10 w-full"
    >
      <Card.Header class="font-medium">
        <slot name="header" />
      </Card.Header>
      <slot name="addtional" />
    </div>
    <Card.Content class="px-6 py-4 text-sm"
      ><slot name="content"
    /></Card.Content>
    <Card.Footer class="py-4 px-6 border-t border-t-pea-surface-black/10"
      ><slot name="footer"
    /></Card.Footer>
  </Card.Root>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { Card } from "@/headless";

const props = withDefaults(
  defineProps<{
    id: string;
    type?: "div" | "section" | "article";
    shadow?: "hover" | "static" | "none";
    variant?:
      | "default"
      | "success"
      | "error"
      | "info"
      | "warning"
      | "primary"
      | "secondary";
  }>(),
  {
    shadow: "none",
    variant: "warning",
    type: "div",
  }
);

const variantClassMap: Record<
  | "default"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "primary"
  | "secondary",
  Record<string, string>
> = {
  primary: {
    base: "border-l-4 border-l-pea-primary-100 border-t border-b border-r",
  },
  secondary: {
    base: "border-l-4 border-l-pea-secondary-100 border-t border-b border-r",
  },
  default: {
    base: "border border-pea-default-100/20",
  },
  success: {
    base: "border-l-4 border-l-pea-success-100 border-t border-b border-r",
  },
  error: {
    base: "border-l-4 border-l-pea-error-100 border-t border-b border-r",
  },
  info: {
    base: "border-l-4 border-l-pea-info-100 border-t border-b border-r",
  },
  warning: {
    base: "border-l-4 border-l-pea-warning-100 border-t border-b border-r",
  },
};

const schemeClasses = computed(() => variantClassMap[props.variant].base);
</script>
