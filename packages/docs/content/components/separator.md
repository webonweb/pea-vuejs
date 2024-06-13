# Separator

A separator component is a user interface element used to visually separate content on a webpage or web application. It can be a simple horizontal or vertical line that divides sections of content.

## Example of component usage:

The detailed example of using the Separator component can be found in our <a href="https://storybook.pea-vuejs.com" target="__blank">Storybook</a>, where we provide a comprehensive guide on how to integrate and customize it for various scenarios in your application.

### Styled:

```vue
<template>
  <Separator :type :orientation />
</template>

<script lang="ts" setup>
import { Separator } from "pea-vuejs";

const type = "solid";
const orientation = "horizontal";
</script>
```

### Headless:

```vue
<template>
  <Separator.Root :type :orientation class="...your styles" />
</template>

<script lang="ts" setup>
import { Separator } from "pea-vuejs/headless";

const type = "solid";
const orientation = "horizontal";
</script>
```

## Installation:

Install the component from your command line.

### bun

```sh twoslash
bun install pea-vuejs
```

### npm

```sh twoslash
npm install pea-vuejs
```

### pnpm

```sh twoslash
pnpm add pea-vuejs
```

### yarn

```sh twoslash
yarn add pea-vuejs
```

## API Reference:

This section provides a detailed overview of the properties available in the component. It serves as a guide for developers on how to utilize and configure the component within their applications.

###

<table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
  <thead class="text-xs text-gray-700 bg-gray-100 ">
    <tr>
      <th scope="col" class="px-6 py-3">
        Prop
      </th>
      <th scope="col" class="px-6 py-3">
        Default
      </th>
      <th scope="col" class="px-6 py-3">
        Type
      </th>
      <th scope="col" class="px-6 py-3">
        Required
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>solid</td>
      <td>Parameter to set the separator type</td>
      <td class="text-center">❌</td>
    </tr>
    <tr>
      <td>orientation</td>
      <td>horizontal</td>
      <td>Parameter to set the separator position</td>
      <td class="text-center">❌</td>
    </tr>
  </tbody>
</table>

## Accessibility:

This section outlines the accessibility features and considerations for the component. It provides guidelines on how to ensure the component is usable by people with disabilities, including keyboard navigation, screen reader support, and adherence to accessibility standards.

For more info go to -> <a class=" text-blue-600" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role" target="__blank">separator</a>
