<template>
  <ClientOnly>
    <Teleport to="body">
      <Primitive :as="as" :as-child="asChild" v-bind="bindings">
        <slot />
      </Primitive>
    </Teleport>
  </ClientOnly>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface RootDialogProps extends PrimitiveProps {
  class?: string;
  id: string;
  isStatic: boolean;
}
</script>

<script lang="ts" setup>
import type { ProvideDialog } from "./types";
import { computed, provide, ref } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootDialogProps>(), {
  as: "dialog",
});

const visible = ref<boolean>(false);
const open = defineModel<boolean>("open", { required: true });

provide<ProvideDialog>("options", {
  id: props.id,
  open,
  visible,
  static: props.isStatic,
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    id: props.id,
    "aria-modal": open.value,
    "aria-labelledby": `dialog-heading-${props.id}`,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  if (open.value) {
    bindings.open = true;
  }

  return bindings;
});
</script>
