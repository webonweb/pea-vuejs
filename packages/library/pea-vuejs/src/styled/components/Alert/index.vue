<template>
  <Alert.Root
    class="grid auto-rows-auto py-2 px-6 rounded"
    :class="schemeClasses.base"
  >
    <Alert.Heading v-if="heading" class="text-pea-surface-white text-base">
      {{ heading }}
    </Alert.Heading>
    <Alert.Content class="text-sm font-normal text-pea-surface-white">
      <slot />
    </Alert.Content>
  </Alert.Root>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { Alert } from "@/headless";

const props = withDefaults(
  defineProps<{
    heading?: string;
    type?: "default" | "success" | "error" | "info" | "warning";
  }>(),
  {
    type: "warning",
  }
);

const variantClassMap: Record<
  "default" | "success" | "error" | "info" | "warning",
  Record<string, string>
> = {
  default: {
    base: "bg-pea-default-100",
  },
  success: {
    base: "bg-pea-success-100",
  },
  error: {
    base: "bg-pea-error-100",
  },
  info: {
    base: "bg-pea-info-100",
  },
  warning: {
    base: "bg-pea-warning-100",
  },
};

const schemeClasses = computed(() => variantClassMap[props.type]);
</script>
