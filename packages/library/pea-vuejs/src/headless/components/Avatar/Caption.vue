<template>
  <Primitive :as="as" :as-child="asChild">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface CaptionAvatarProps extends PrimitiveProps {}
</script>

<script lang="ts" setup>
import { Primitive } from "@pea-vuejs/primitive";

withDefaults(defineProps<CaptionAvatarProps>(), {
  as: "figcaption",
});
</script>
