<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <g
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M2422 4709 c-38 -18 -75 -47 -95 -72 -57 -70 -2299 -3817 -2313
-3865 -41 -135 21 -286 146 -356 l55 -31 2345 0 2345 0 42 23 c130 69 201 231
160 363 -15 49 -2258 3797 -2314 3866 -20 25 -57 54 -95 72 -52 27 -72 31
-138 31 -66 0 -86 -4 -138 -31z"
      />
    </g>
  </Primitive>
</template>
<script lang="ts">
import type { ProvideTooltip } from "./types";
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface TriangleTooltipProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<TriangleTooltipProps>(), {
  as: "svg",
});

const options = inject<ProvideTooltip>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    "data-position": options?.position,
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "512.000000pt",
    height: "512.000000pt",
    viewBox: "0 0 512.000000 512.000000",
    preserveAspectRatio: "xMidYMid meet",
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
