<template>
  <Badge.Root :id="id" class="flex">
    <slot />
    <Shared.Sup
      :for="id"
      role="status"
      :aria-live="true"
      class="text-[10px] font-bold py-0.5 px-1 min-w-5 rounded-full h-5 flex justify-center items-center text-pea-surface-white"
      :class="schemeClasses"
    >
      {{ value }}
    </Shared.Sup>
  </Badge.Root>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { Badge, Shared } from "@/headless";

const props = withDefaults(
  defineProps<{
    id: string;
    type?: "default" | "success" | "error" | "info" | "warning";
  }>(),
  {
    type: "default",
  }
);

const value = defineModel<string | number>("value", { required: false });

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

const schemeClasses = computed(() => variantClassMap[props.type].base);
</script>
