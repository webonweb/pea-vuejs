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

export interface RootDrawerProps extends PrimitiveProps {
  class?: string;
  id: string;
  isStatic: boolean;
}
</script>

<script lang="ts" setup>
import { computed, provide, ref } from "vue";
import type { ProvideDrawer } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootDrawerProps>(), {
  as: "aside",
});

const visible = ref<boolean>(false);
const open = defineModel<boolean>("open", { required: true });

provide<ProvideDrawer>("options", {
  id: props.id,
  open,
  visible,
  static: props.isStatic,
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    id: props.id,
    role: "complementary",
    "aria-labelledby": `drawer-heading-${props.id}`,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  if (!open.value) {
    bindings["aria-hidden"] = true;
  }

  return bindings;
});
</script>
