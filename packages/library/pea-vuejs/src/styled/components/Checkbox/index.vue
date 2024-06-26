<template>
  <Checkbox.Root
    :id="id"
    :name="name"
    :required="required"
    :disabled="disabled"
    :describe="describe"
    :checked="modelValue"
    :invalid="errorMessage ? true : false"
    @update:checked="(value: boolean) => (modelValue = value)"
    class="grid auto-cols-auto grid-cols-[max-content_1fr] gap-x-2 items-start"
  >
    <Checkbox.Trigger
      :disabled="disabled"
      class="border flex justify-center items-center rounded relative top-0.5 transition-colors"
      :class="[
        schemeCheckboxClasses,
        {
          'opacity-60 cursor-not-allowed grayscale blur-[0.5px]': disabled,
        },
      ]"
    >
      <Transition name="fade-in">
        <Shared.Icon
          v-if="modelValue"
          name="checked"
          class="text-pea-surface-white"
          :class="schemeIconClasses"
        />
      </Transition>
    </Checkbox.Trigger>
    <div>
      <Shared.Label :for="id" class="select-none text-base">
        <slot />
        <Shared.Sup v-if="required" class="text-pea-error-100"> * </Shared.Sup>
      </Shared.Label>

      <Shared.Description
        v-if="slots.description"
        :id="`${id}-help`"
        class="text-sm text-pea-default-100 block"
      >
        <slot name="description" />
      </Shared.Description>
      <Shared.Description
        v-if="errorMessage"
        :id="`${id}-error`"
        class="text-pea-error-100 text-sm"
      >
        {{ errorMessage }}
      </Shared.Description>
    </div>
  </Checkbox.Root>
</template>
<script lang="ts" setup>
import { useSlots, computed } from "vue";
import { Checkbox, Shared } from "@/headless";

const props = withDefaults(
  defineProps<{
    id: string;
    name: string;
    required?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    type?:
      | "primary"
      | "secondary"
      | "default"
      | "success"
      | "error"
      | "info"
      | "warning";
    size?: "small" | "medium" | "large";
  }>(),
  {
    type: "primary",
    size: "medium",
  }
);

const slots = useSlots();

const modelValue = defineModel<boolean>("value", {
  required: true,
});

const describe = computed(() => {
  let describe = "";
  describe = slots.description ? `${props.id}-help ` : describe;
  describe = props.errorMessage ? `${props.id}-error ` : describe;

  return describe === "" ? undefined : describe;
});

const variantClassMap: Record<
  | "default"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "primary"
  | "secondary",
  Record<string, string | Record<"small" | "medium" | "large", string>>
> = {
  primary: {
    base: "border-pea-primary-100",
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
    checked: "bg-pea-primary-100",
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3 h-3",
      large: "w-3.5 h-3.5",
    },
  },
  secondary: {
    base: "border-pea-secondary-100",
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
    checked: "bg-pea-secondary-100",
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3 h-3",
      large: "w-3.5 h-3.5",
    },
  },
  default: {
    base: "border-pea-default-100",
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
    checked: "bg-pea-default-100",
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3 h-3",
      large: "w-3.5 h-3.5",
    },
  },
  success: {
    base: "border-pea-success-100",
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
    checked: "bg-pea-success-100",
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3 h-3",
      large: "w-3.5 h-3.5",
    },
  },
  error: {
    base: "border-pea-error-100",
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
    checked: "bg-pea-error-100",
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3 h-3",
      large: "w-3.5 h-3.5",
    },
  },
  info: {
    base: "border-pea-info-100",
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
    checked: "bg-pea-info-100",
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3 h-3",
      large: "w-3.5 h-3.5",
    },
  },
  warning: {
    base: "border-pea-warning-100",
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
    checked: "bg-pea-warning-100",
    icon: {
      small: "w-2.5 h-2.5",
      medium: "w-3 h-3",
      large: "w-3.5 h-3.5",
    },
  },
};

const schemeCheckboxClasses = computed(() =>
  [variantClassMap[props.type].base, variantClassMap[props.type][props.size]]
    .concat(modelValue.value ? [variantClassMap[props.type].checked] : [])
    .join(" ")
);

const schemeIconClasses = computed(() =>
  [variantClassMap[props.type].icon[props.size]].join(" ")
);
</script>

<style lang="scss" scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.4s;
}
.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
