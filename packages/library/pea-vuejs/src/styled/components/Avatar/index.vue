<template>
  <Avatar.Root
    class="overflow-hidden border border-pea-surface-black/5"
    :class="schemeClasses"
  >
    <Shared.Image
      :image="{
        ...image,
        placeholder: EmptyAvatar,
      }"
      :class="schemeClasses"
    />
    <Avatar.Caption>
      {{ image?.title || image?.alt }}
    </Avatar.Caption>
  </Avatar.Root>
</template>
6
<script lang="ts" setup>
import { computed } from "vue";
import { Avatar, Shared } from "@/headless";
import type { AvatarOption } from "./types";
import EmptyAvatar from "../../../assets/images/empty-avatar.webp";

const props = withDefaults(
  defineProps<{
    size?: "small" | "medium" | "large";
    type?: "square" | "circle";
    image: AvatarOption;
  }>(),
  {
    size: "large",
    type: "circle",
  }
);

const variantClassMap: Record<
  "small" | "medium" | "large",
  Record<string, string>
> = {
  small: {
    base: "w-8 h-8",
    circle: "rounded-full",
    square: "",
  },
  medium: {
    base: "w-10 h-10",
    circle: "rounded-full",
    square: "",
  },
  large: {
    base: "w-12 h-12",
    circle: "rounded-full",
    square: "",
  },
};

const schemeClasses = computed(() =>
  [
    variantClassMap[props.size].base,
    variantClassMap[props.size][props.type],
  ].join(" ")
);
</script>
