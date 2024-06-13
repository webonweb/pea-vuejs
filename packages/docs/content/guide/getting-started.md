# Getting Started

## Introduction

Welcome to the <b class="text-[#d5e47c]">Pea VueJs</b> component library! This guide will help you get started with installing and using our library in your Vue or Nuxt project.

## Installation

To begin using <b class="text-[#d5e47c]">Pea VueJs</b>, you first need to install the library via npm | yarn | pnpm or bun. Follow the steps below to add <b class="text-[#d5e47c]">Pea VueJs</b> to your project.

### Using yarn

<ol>
  <li>Open your terminal and navigate to your Vue or Nuxt project directory.</li>
  <li>Run the following command to install  <b class="text-[#d5e47c]">Pea VueJs</b>:</li>
</ol>

```sh twoslash
yarn add pea-vuejs
```

### Using npm

<ol>
  <li>Open your terminal and navigate to your Vue or Nuxt project directory.</li>
  <li>Run the following command to install  <b class="text-[#d5e47c]">Pea VueJs</b>:</li>
</ol>

```sh twoslash
npm install pea-vuejs
```

### Using pnpm

<ol>
  <li>Open your terminal and navigate to your Vue or Nuxt project directory.</li>
  <li>Run the following command to install  <b class="text-[#d5e47c]">Pea VueJs</b>:</li>
</ol>

```sh twoslash
pnpm install pea-vuejs
```

### Using bun

<ol>
  <li>Open your terminal and navigate to your Vue or Nuxt project directory.</li>
  <li>Run the following command to install  <b class="text-[#d5e47c]">Pea VueJs</b>:</li>
</ol>

```sh twoslash
bun install pea-vuejs
```

## Usage

### Unstyled Components

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

### Styled Components

To begin with, in order to add styled components, you need to add the <b class="text-[#d5e47c]">Pea VueJs</b> theme to your Tailwind configuration.

<ol>
  <li>Open the Tailwind CSS configuration file. It is usually located in the root directory of your project - tailwind.config.[ts|js].</li>
  <li>Import the theme from the <b class="text-[#d5e47c]">Pea VueJs</b> library:</li>
  <li>Use the destructured theme object for the colors key in the configuration.</li>
</ol>

#### Example

```typescript
/** @type {import('tailwindcss').Config} */
import { PeaTheme } from "pea-vuejs";

export default {
  content: ["./src/**/*.{vue,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...PeaTheme,
      },
    },
  },
};
```

<br/>

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

You can also easily override selected primary colors of the library. Simply place the color declaration right after loading the library's theme.

#### Example

```typescript
/** @type {import('tailwindcss').Config} */
import { PeaTheme } from "pea-vuejs";

export default {
  content: ["./src/**/*.{vue,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...PeaTheme,
        "pea-primary-100": "#000000",
      },
    },
  },
};
```

#### a list of all available colors

<table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
   <thead class="text-xs text-gray-700 bg-gray-100 ">
      <tr>
        <th scope="col" class="px-6 py-3">
          Name
        </th>
        <th scope="col" class="px-6 py-3">
          Color
        </th>
      </tr>
   </thead>
   <tbody>
    <tr>
      <td>---</td>
      <td>---</td>
    </tr>
   </tbody>
</table>

## Support

If you encounter any issues or have questions, feel free to reach out to our support team.

Happy coding with <b class="text-[#d5e47c]">Pea VueJs</b>!
