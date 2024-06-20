<template>
  <Button.Root
    class="grid grid-flow-col items-center py-1.5 gap-x-2 rounded transition-colors select-none"
    :class="[
      schemeButtonClasses,
      {
        'opacity-60 cursor-not-allowed grayscale blur-[0.5px]': disabled,
        'cursor-pointer': !disabled,
        'px-4': !slotsDefaultEmpty,
        'px-2': slotsDefaultEmpty,
      },
    ]"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :to="to"
    :title="title"
  >
    <Shared.Icon
      v-if="icon"
      :name="icon"
      class="relative top-[1px]"
      :class="[
        schemeIconClasses,
        {
          'order-0': positionIcon === 'before',
          'order-1': positionIcon === 'after',
        },
      ]"
    />
    <slot />
  </Button.Root>
</template>
<script lang="ts" setup>
import { computed, useSlots } from "vue";
import { Button, Shared } from "@/headless";

const slots = useSlots();

const props = withDefaults(
  defineProps<{
    to?: string;
    icon?: string;
    title?: string;
    ariaLabel?: string;
    variant?: "link" | "button";
    type?:
      | "primary"
      | "secondary"
      | "default"
      | "success"
      | "error"
      | "info"
      | "warning";
    size?: "small" | "medium" | "large";
    positionIcon?: "before" | "after";
    disabled?: boolean;
  }>(),
  {
    type: "primary",
    size: "medium",
    variant: "button",
    positionIcon: "before",
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
  Record<string, Record<string, string>>
> = {
  secondary: {
    base: {
      button:
        "bg-pea-secondary-100/80 text-pea-surface-white hover:bg-pea-secondary-100/70 active:bg-pea-secondary-100 border border-pea-secondary-100",
      link: "text-pea-secondary-100/80 hover:text-pea-secondary-100/60 active:text-pea-secondary-100",
      small: "text-xs",
      medium: "text-base",
      large: "text-xl",
    },
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3.5 h-3.5",
      large: "w-4 h-4",
    },
  },
  primary: {
    base: {
      button:
        "bg-pea-primary-100/80 text-pea-surface-white hover:bg-pea-primary-100/70 active:bg-pea-primary-100 border border-pea-primary-100",
      link: "text-pea-primary-100/80 hover:text-pea-primary-100/60 active:text-pea-primary-100",
      small: "text-xs",
      medium: "text-base",
      large: "text-xl",
    },
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3.5 h-3.5",
      large: "w-4 h-4",
    },
  },
  default: {
    base: {
      button:
        "bg-pea-default-100/80 text-pea-surface-white hover:bg-pea-default-100/70 active:bg-pea-default-100 border border-pea-default-100",
      link: "text-pea-surface-black/80 hover:text-pea-surface-black/60 active:text-pea-surface-black",
      small: "text-xs",
      medium: "text-base",
      large: "text-xl",
    },
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3.5 h-3.5",
      large: "w-4 h-4",
    },
  },
  success: {
    base: {
      button:
        "bg-pea-success-100 text-pea-surface-white hover:bg-pea-success-100/70 active:bg-pea-success-100 border-pea-success-100",
      link: "text-pea-success-100/90 hover:text-pea-success-100/60 active:text-pea-success-100",
      small: "text-xs",
      medium: "text-base",
      large: "text-xl",
    },
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3.5 h-3.5",
      large: "w-4 h-4",
    },
  },
  error: {
    base: {
      button:
        "bg-pea-error-100 text-pea-surface-white hover:bg-pea-error-100/70 active:bg-pea-error-100 border-pea-error-100",
      link: "text-pea-error-100/90 hover:text-pea-error-100/60 active:text-pea-error-100",
      small: "text-xs",
      medium: "text-base",
      large: "text-xl",
    },
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3.5 h-3.5",
      large: "w-4 h-4",
    },
  },
  info: {
    base: {
      button:
        "bg-pea-info-100 text-pea-surface-white hover:bg-pea-info-100/70 active:bg-pea-info-100 border-pea-info-100",
      link: "text-pea-info-100/90 hover:text-pea-info-100/60 active:text-pea-info-100",
      small: "text-xs",
      medium: "text-base",
      large: "text-xl",
    },
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3.5 h-3.5",
      large: "w-4 h-4",
    },
  },
  warning: {
    base: {
      button:
        "bg-pea-warning-100 text-pea-surface-white hover:bg-pea-warning-100/70 active:bg-pea-warning-100 border-pea-warning-100",
      link: "text-pea-warning-100/90 hover:text-pea-warning-100/60 active:text-pea-warning-100",
      small: "text-xs",
      medium: "text-base",
      large: "text-xl",
    },
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3.5 h-3.5",
      large: "w-4 h-4",
    },
  },
};

const schemeButtonClasses = computed(() =>
  [
    variantClassMap[props.type].base[props.variant],
    variantClassMap[props.type].base[props.size],
  ].join(" ")
);

const schemeIconClasses = computed(() =>
  [, variantClassMap[props.type].icon[props.size]].join(" ")
);

const slotsDefaultEmpty = computed(() => slots.default === undefined);
</script>
