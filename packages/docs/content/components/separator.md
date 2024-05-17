# Separator

A separator component is a user interface element used to visually separate content on a webpage or web application. It can be a simple horizontal or vertical line that divides sections of content.

## Example of component usage:

<CodeEditor ref="codeEditorRef" v-model="code" :read-only="true" :languages="[['typescript', 'Styled'], ['javascript', 'Headless']]" class="!w-[800px] relative -top-[30px]" theme="base16-bespin" @lang="handleChangeLang"/>

## Installation:

Install the component from your command line.

## API Reference:

This section provides a detailed overview of the properties available in the component. It serves as a guide for developers on how to utilize and configure the component within their applications.

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
  <tbody v-html="apiReference">
  </tbody>
</table>

## Accessibility:

This section outlines the accessibility features and considerations for the component. It provides guidelines on how to ensure the component is usable by people with disabilities, including keyboard navigation, screen reader support, and adherence to accessibility standards.

For more info go to -> <a class=" text-blue-600" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role" target="__blank">separator</a>

<script lang="ts" setup>
import { ref } from 'vue'

const apiReference = ref()

const propsCode: Record<string, Record<string, string | boolean>[]> = {
  typescript: [
    {
      name: 'type',
      default: 'solid',
      type: 'string',
      description: 'Parameter to set the separator type',
      required: false,
    },
    {
      name: 'orientation',
      default: 'horizontal',
      type: 'string',
      description: 'Parameter to set the separator position',
      required: false,
    }
  ],
  javascript: [
    {
      name: 'type',
      default: 'solid',
      type: 'string',
      description: 'Parameter to set the separator type',
      required: false,
    },
    {
      name: 'orientation',
      default: 'horizontal',
      type: 'string',
      description: 'Parameter to set the separator position',
      required: false,
    },
    {
      name: 'class',
      default: '---',
      type: 'string',
      description: 'Parameter to set the separator class style',
      required: false,
    }
  ],
}

</script>
