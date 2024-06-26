<template>
  <Collapse.Root
    :id="id"
    :open="model"
    @update:open="(state) => (!disabled ? (model = state) : null)"
    class="grid grid-flow-row auto-rows-max"
  >
    <Collapse.Trigger
      class="flex items-center gap-x-1 w-max"
      :class="{
        'cursor-pointer': !disabled,
      }"
    >
      <slot name="heading" />
      <Shared.Icon
        v-if="!disabled"
        name="arrow-down"
        class="w-4 h-4 transition-transform"
        :class="{
          'rotate-180': model,
          'rotate-0': !model,
        }"
      />
    </Collapse.Trigger>
    <Collapse.Content>
      <slot />
    </Collapse.Content>
  </Collapse.Root>
</template>
<script lang="ts" setup>
import { Collapse, Shared } from "@/headless";

defineProps<{
  id: string;
  disabled?: boolean;
}>();

const model = defineModel<boolean>("open", { required: true });
</script>
