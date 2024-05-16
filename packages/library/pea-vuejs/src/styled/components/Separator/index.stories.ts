import type { Meta, StoryObj } from '@storybook/vue3';

import { ref, watch } from 'vue';
import hljs from 'highlight.js';
import SeparatorComponent from './index.vue'
import CodeEditor from 'simple-code-editor';


const meta: Meta<typeof SeparatorComponent> = {
  title: 'Separator',
  component: SeparatorComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { description: 'Parameter to set the separator type', options: ['solid', 'dashed'] },
    orientation: { description: 'Parameter to set the separator position', options: ['horizontal', 'vertical'] },
  },
};

export default meta;

type Story = StoryObj<typeof SeparatorComponent>;

export const Separator: Story = {
  render: (args) => ({
    components: { SeparatorComponent, CodeEditor },
    setup() {

      const apiReference = ref()
      const codeEditorRef = ref()
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

      const codeMap: Record<string, string> = {
        typescript: `<template>
  <Separator :type :orientation />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Separator } from "pea-vuejs"

const type = ref('solid')
const orientation = ref('horizontal')
</script>`,
        javascript: `<template>
  <Separator.Root :type :orientation class=""/>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { Separator } from "pea-vuejs/headless"

const type = ref('solid')
const orientation = ref('horizontal')
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


      watch(() => [args.type, args.orientation], () => {
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
        <h3 class="text-5xl font-bold">Separator</h3>
        <p class="text-base text-black/60">A separator component is a user interface element used to visually separate content on a webpage or web application. It can be a simple horizontal or vertical line that divides sections of content.</p>
      </div>
      <br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <strong class="text-2xl font-bold"># Example of component usage:</strong>
        <div class="p-8 h-40 bg-black/5 rounded-t-lg border border-black/5 relative flex items-center justify-center">
          <SeparatorComponent :orientation="args.orientation" :type="args.type"/>
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
          <p class="text-base text-black/60">This section outlines the accessibility features and considerations for the component. It provides guidelines on how to ensure the component is usable by people with disabilities, including keyboard navigation, screen reader support, and adherence to accessibility standards.</p>
        </div>
        <div>
          For more info go to -> <a class=" text-blue-600" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role" target="__blank">separator</a> 
        </div>
      </div>
    </div>
    `,
  }),
  args: {
    type: 'solid',
    orientation: 'horizontal',
  },
};
