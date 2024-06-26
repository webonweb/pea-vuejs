import type { Meta, StoryObj } from '@storybook/vue3';

import { ref, watch } from 'vue';
import hljs from 'highlight.js';
import CheckboxComponent from './index.vue'
import CodeEditor from 'simple-code-editor';

const meta: Meta<typeof CheckboxComponent> = {
  title: 'Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    name: { description: 'Parameter to set name checkbox', type: 'string' },
    id: { description: 'Parameter to set id checkbox', type: 'string' },
    errorMessage: { description: 'Parameter to set errorMessage checkbox', type: 'string' },
    type: { description: 'Parameter to set the checkbox type', options: ["default", "success", "error", "info", "warning", "primary", "secondary"] },
    size: { description: 'Parameter to set the checkbox size', options: ["small", "medium", "large"] },
    disabled: { description: 'Parameter to set disabled checkbox', type: 'boolean' },
    required: { description: 'Parameter to set required checkbox', type: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxComponent>;

export const Checkbox: Story = {
  render: (args) => ({
    components: { CheckboxComponent, CodeEditor },
    setup() {
      const apiReference = ref()
      const codeEditorRef = ref()
      const propsCode: Record<string, Record<string, string | boolean>[]> = {
        typescript: [
          {
            name: 'name',
            default: '---',
            type: 'string',
            description: 'Parameter to set name checkbox',
            required: true,
          },
          {
            name: 'id',
            default: '---',
            type: 'string',
            description: 'Parameter to set id checkbox',
            required: true,
          },
          {
            name: 'errorMessage',
            default: '---',
            type: 'string',
            description: 'Parameter to set errorMessage checkbox',
            required: false,
          },
          {
            name: 'type',
            default: 'primary',
            type: '"default", "success", "error", "info", "warning", "primary", "secondary"',
            description: 'Parameter to set the checkbox type',
            required: false,
          },
          {
            name: 'size',
            default: 'medium',
            type: '"small", "medium", "large"',
            description: 'Parameter to set the checkbox size',
            required: false,
          },
          {
            name: 'disabled',
            default: 'false',
            type: 'boolean',
            description: 'Parameter to set disabled checkbox',
            required: false,
          },
          {
            name: 'required',
            default: 'false',
            type: 'boolean',
            description: 'Parameter to set required checkbox',
            required: false,
          },
          {
            name: 'value',
            default: '---',
            type: 'boolean',
            description: 'Parameter to set v-model checkbox',
            required: true,
          },
        ],
        javascript: [
          {
            name: 'name',
            default: '---',
            type: 'string',
            description: 'Parameter to set name checkbox',
            required: true,
          },
          {
            name: 'id',
            default: '---',
            type: 'string',
            description: 'Parameter to set id checkbox',
            required: true,
          },
          {
            name: 'describe',
            default: '---',
            type: 'string',
            description: 'Parameter to set describe checkbox',
            required: false,
          },
          {
            name: 'disabled',
            default: 'false',
            type: 'boolean',
            description: 'Parameter to set disabled checkbox',
            required: false,
          },
          {
            name: 'required',
            default: 'false',
            type: 'boolean',
            description: 'Parameter to set required checkbox',
            required: false,
          },
          {
            name: 'checked',
            default: '---',
            type: 'boolean',
            description: 'Parameter to set v-model checkbox',
            required: true,
          },
        ],
      }

      const codeMap: Record<string, string> = {
        typescript: `<template>
 <Checkbox :id :name :type :disabled :size :error-message="errorMessage" :required v-model:value="checked">
    <template #description>
        Lorem ipsum descirption
    </template>
    Lorem ipsum content
 </Checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Checkbox } from "pea-vuejs"

const id = ref('example-checkbox')
const name = ref('example-checkbox')
const size = ref('medium')
const type = ref('primary')
const disabled = ref(false)
const required = ref(false)
const checked = ref(false)
const errorMessage = ref('Error lorem ipsum')
</script>`,
        javascript: `<template>
  <Checkbox.Root
    :id="id"
    :name="name"
    :required="required"
    :disabled="disabled"
    describe="Lorem ipsum"
    v-model:checked="modelValue"
    :invalid="true"
  >
    <Checkbox.Trigger>
      <Shared.Icon
        v-if="modelValue"
        name="checked"
      />
    </Checkbox.Trigger>
  </Checkbox.Root>
</template>
  
<script lang="ts" setup>
import { ref } from "vue" 
import { Checkbox, Shared } from "pea-vuejs/headless";

const id = ref('example-checkbox')
const name = ref('example-checkbox')
const disabled = ref(false)
const required = ref(false)

const modelValue = ref(false)
</script>`
      }

      const instalationMap: Record<string, string> = {
        npm: 'npm install pea-vuejs',
        pnpm: 'pnpm install pea-vuejs',
        yarn: 'yarn add pea-vuejs',
        bun: 'bun add pea-vuejs'
      }

      const code = ref(codeMap.typescript)
      const instalation = ref(instalationMap.npm)

      const handleChangeLang = (lang: string) => {
        codeEditorRef.value.$refs.code.removeAttribute('data-highlighted');
        code.value = codeMap[lang]

        apiReference.value = propsCode[lang].map(item => `
          <tr class="bg-white border-b  hover:bg-gray-50 ">
              <td class="px-6 py-4">
                  ${item.name}
              </td>
              <td class="px-6 py-4">
                ${item.default}
              </td>
              <td class="px-6 py-4">
                ${item.type}
              </td>
              <td class="px-6 py-4">
                ${item.description}
              </td>
              <td class="px-6 py-4">
                ${item.required}
              </td>
          </tr>
        `).join('')
      }

      const handleChangeInstalationLang = (lang: string) => {
        codeEditorRef.value.$refs.code.removeAttribute('data-highlighted');
        instalation.value = instalationMap[lang]
      }


      watch(() => [args.type, args.size, args.disabled, args.id, args.name, code.value], () => {
        codeEditorRef.value.$refs.code.removeAttribute('data-highlighted');
      })


      return {
        args,
        code,
        apiReference,
        instalation,
        codeEditorRef,
        handleChangeLang,
        handleChangeInstalationLang
      };
    },
    template: `
        <div class="w-[800px] pb-10 overflow-visible">
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <h3 class="text-5xl font-bold">Button</h3>
        <p class="text-base text-black/60">A Checkbox is an interactive user interface component that allows for the selection of one or more options from a set. It can be used to enable or disable features, and its state (checked or unchecked) is visible to the user.</p>
      </div>
      <br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <strong class="text-2xl font-bold"># Example of component usage:</strong>
        <div class="p-8 h-40 bg-black/5 rounded-t-lg border border-black/5 relative flex items-center justify-center">
          
    <CheckboxComponent :name="args.name" :id="args.id" :error-message="args.errorMessage" :type="args.type" :size="args.size" :disabled="args.disabled" :required="args.required">
      <template #description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue mollis ligula in efficitur. Cras consectetur erat ut felis iaculis,
      </template>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue mollis ligula in efficitur. Cras consectetur erat ut felis iaculis, a bibendum elit laoreet. Mauris vel viverra lacus, non dapibus nibh.
    </CheckboxComponent>
        </div>
        <CodeEditor ref="codeEditorRef" v-model="code" :read-only="true" :languages="[['typescript', 'Styled'], ['javascript', 'Headless']]" class="!w-[800px] relative -top-[30px]" theme="base16-bespin" @lang="handleChangeLang"/>
      </div>
      <SeparatorComponent /><br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4 mb-10">
        <div>
          <strong class="text-2xl font-bold mb-3 block"># Installation:</strong>
          <p class="text-base text-black/60">Install the component from your command line.</p>
        </div>
        <CodeEditor v-model="instalation" :read-only="true" :languages="[['npm', 'npm'], ['pnpm', 'pnpm'], ['yarn', 'yarn'], ['bun', 'bun']]" class="!w-[800px]" theme="base16-bespin" @lang="handleChangeInstalationLang"/>
      </div>
      <SeparatorComponent /><br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <div>
          <strong class="text-2xl font-bold mb-3 block"># API Reference:</strong>
          <p class="text-base text-black/60">This section provides a detailed overview of the properties available in the component. It serves as a guide for developers on how to utilize and configure the component within their applications.</p>
        </div>
        <div>
        <br/>
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
                  Description
                </th>
                <th scope="col" class="px-6 py-3">
                  Required
                </th>
              </tr>
            </thead>
            <tbody v-html="apiReference">
            </tbody>
          </table>
        </div>
      </div>
      <br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <div>
          <strong class="text-2xl mb-3 font-bold block"># Accessibility:</strong>
          <p class="text-base text-black/60">
Adjusting a component for Accessibility involves ensuring it is accessible and easy to use for people with various disabilities. It is important that every component, such as a checkbox, is compatible with assistive technologies like screen readers and meets WCAG standards.</p>
        </div>
      </div>
    </div>
`,
  }),
  args: {
    name: 'checkbox-example',
    id: 'checkbox-example',
    errorMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'primary',
    size: 'medium',
    disabled: false,
    required: false,
  },
};
