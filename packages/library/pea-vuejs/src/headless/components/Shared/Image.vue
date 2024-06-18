<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    v-bind="bindings"
    @error="onImageError"
    @load="onImageLoad"
  />
</template>
<script lang="ts">
import type { Image } from "./types";
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface RootImageProps extends PrimitiveProps {
  class?: string;
  image: Image;
}
</script>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootImageProps>(), {
  as: "image",
});

const src = ref<string | null | undefined>(props.image.placeholder);

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    loading: "lazy",
    draggable: "false",
    decoding: "async",
    fetchpriority: "auto",
    src: src.value,
    alt: props.image.alt,
    width: props.image.width || undefined,
    height: props.image.height || undefined,
    title: props.image.title || props.image.alt,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});

const onImageError = () => {
  src.value = props.image.placeholder;
};

const onImageLoad = () => {
  src.value = props.image.src || props.image.placeholder;
};
</script>
