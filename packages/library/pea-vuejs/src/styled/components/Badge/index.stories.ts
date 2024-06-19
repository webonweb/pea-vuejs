import type { Meta, StoryObj } from '@storybook/vue3';

import { ref, watch } from 'vue';
import hljs from 'highlight.js';
import BadgeComponent from './index.vue'
import CodeEditor from 'simple-code-editor';


const meta: Meta<typeof BadgeComponent> = {
  title: 'Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    id: { description: 'Parameter to set the id', type: 'string' },
    type: { description: 'Parameter to set the type', options: ["default", "success", "error", "info", "warning"] },
    value: { description: 'Parameter to set the value', type: 'string' },
  },
};

export default meta;

type Story = StoryObj<typeof BadgeComponent>;

export const Badge: Story = {
  render: (args) => ({
    components: { BadgeComponent, CodeEditor },
    setup() {
      const apiReference = ref()
      const codeEditorRef = ref()
      const propsCode: Record<string, Record<string, string | boolean>[]> = {
        typescript: [
          {
            name: 'id',
            default: '---',
            type: 'string',
            description: 'Parameter to set the id',
            required: true,
          },
          {
            name: 'type',
            default: 'default',
            type: '"default", "success", "error", "info", "warning"]',
            description: 'Parameter to set the type',
            required: false,
          },
          {
            name: 'value',
            default: `---`,
            type: 'string',
            description: 'Parameter to set the value',
            required: false,
          }
        ],
        javascript: [],
      }

      const codeMap: Record<string, string> = {
        typescript: `<template>
  <Badge :type :id :value>
    Lorm ipsum
  </Badge>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Badge } from "pea-vuejs"

const id = ref('badge-note')
const type = ref('default')

const value = ref('45')
</script>`,
        javascript: `<template>
  <Badge.Root :id="id">
    Lorem ipsum
    <Shared.Sup
      :for="id"
      role="status"
      :aria-live="true"
    >
      {{ value }}
    </Shared.Sup>
  </Badge.Root>
</template>
  
<script lang="ts" setup>
import { ref } from "vue" 
import { Badge, Shared } from "pea-vuejs/headless";

const id = ref('badge-note')
const value = ref('45')
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


      watch(() => [args.type, args.value, args.id, code.value], () => {
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
        <h3 class="text-5xl font-bold">Badge</h3>
        <p class="text-base text-black/60">The Badge component in software is a small, often rounded graphical element used to display a number or short text, typically to indicate new messages, notifications, or status. The Badge is often placed on icons, buttons, or avatars to draw the user's attention to important information.</p>
      </div>
      <br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <strong class="text-2xl font-bold"># Example of component usage:</strong>
        <div class="p-8 h-40 bg-black/5 rounded-t-lg border border-black/5 relative flex items-center justify-center">
            <BadgeComponent :type="args.type" v-model:value="args.value" :id="args.id">Lorem ipsum</BadgeComponent>
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
          <p class="text-base text-black/60">Accessibility for the Badge component ensures that all users, including those with disabilities, can perceive and understand the badge's content through screen readers and other assistive technologies. This includes providing appropriate ARIA attributes and ensuring that the badge's information is conveyed in a meaningful way to users who rely on these tools.</p>
        </div>
      </div>
    </div>
  `,
  }),
  args: {
    id: 'badge-alert',
    type: 'default',
    value: '45'
  },
};
