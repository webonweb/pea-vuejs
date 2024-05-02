<template>
  <component v-bind="bindings" :is="icon" />
</template>
<script lang="ts" setup>
const props = defineProps<{
  name: string;
  class?: string;
}>();

const icon = computed(() => {
  const name = props.name;
  return defineAsyncComponent(
    () => import(`../assets/icons/${name}.svg?component`)
  );
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {};

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
