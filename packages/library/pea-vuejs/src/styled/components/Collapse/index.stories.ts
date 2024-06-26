import type { Meta, StoryObj } from '@storybook/vue3';

import { ref, watch } from 'vue';
import hljs from 'highlight.js';
import CollapseComponent from './index.vue'
import CodeEditor from 'simple-code-editor';

const meta: Meta<typeof CollapseComponent> = {
  title: 'Collapse',
  component: CollapseComponent,
  tags: ['autodocs'],
  argTypes: {
    id: { description: 'Parameter to set id collapse', type: 'string' },
    disabled: { description: 'Parameter to set disabled collapse', type: 'boolean' },
    open: { description: 'Parameter to set v-model collapse', type: 'boolean' }
  },
};

export default meta;

type Story = StoryObj<typeof CollapseComponent>;

export const Collapse: Story = {
  render: (args) => ({
    components: { CollapseComponent, CodeEditor },
    setup() {
      const apiReference = ref()
      const codeEditorRef = ref()
      const propsCode: Record<string, Record<string, string | boolean>[]> = {
        typescript: [
          {
            name: 'id',
            default: '---',
            type: 'string',
            description: 'Parameter to set id collapse',
            required: true,
          },
          {
            name: 'disabled',
            default: 'false',
            type: 'boolean',
            description: 'Parameter to set disabled collapse',
            required: false,
          },
          {
            name: 'open',
            default: '---',
            type: 'boolean',
            description: 'Parameter to set v-model collapse',
            required: true,
          },
        ],
        javascript: [
          {
            name: 'id',
            default: '---',
            type: 'string',
            description: 'Parameter to set id collapse',
            required: true,
          },
          {
            name: 'open',
            default: '---',
            type: 'boolean',
            description: 'Parameter to set v-model collapse',
            required: true,
          },
        ],
      }

      const codeMap: Record<string, string> = {
        typescript: `<template>
 <Collapse :id :disabled v-model:open="open" >
    <template #heading>
        Lorem ipsum
    </template>
    Lorem ipsum content
 </Collapse>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Collapse } from "pea-vuejs"

const id = ref('example-collapse')
const disabled = ref(false)
const open = ref(false)
</script>`,
        javascript: `<template>
  <Collapse.Root :id="id" v-model:open="open">
    <Collapse.Trigger>
      <slot name="heading" />
      <Shared.Icon name="arrow-down" />
    </Collapse.Trigger>
    <Collapse.Content>
      <slot />
    </Collapse.Content>
  </Collapse.Root>
</template>
  
<script lang="ts" setup>
import { ref } from "vue" 
import { Collapse, Shared } from "pea-vuejs/headless";

const id = ref('example-collapse')
const open = ref(false)
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


      watch(() => [args.disabled, args.id, args.open, code.value], () => {
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
        <h3 class="text-5xl font-bold">Collapse</h3>
        <p class="text-base text-black/60">
The Collapse component is a user interface element that allows hiding and expanding content in response to user actions. It is often used to save screen space and improve clarity by presenting information on demand.</p>
      </div>
      <br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <strong class="text-2xl font-bold"># Example of component usage:</strong>
        <div class="p-8 h-40 bg-black/5 rounded-t-lg border border-black/5 relative flex items-center justify-center">
        <CollapseComponent :open="args.open" :id="args.id" :disabled="args.disabled">
        <template #heading>
          Lorem ipsum dolor sit amet,
        </template>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula sollicitudin quam id dictum. Maecenas enim quam, facilisis id risus ut, eleifend congue neque. Nullam aliquet sit amet velit ac ornare. 
      </CollapseComponent>
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
Adjusting the collapse component for Accessibility involves ensuring it is accessible to people with various disabilities. It is important that this component is compatible with assistive technologies like screen readers and that users can control it using a keyboard.</p>
        </div>
      </div>
    </div>
`,
  }),
  args: {
    id: 'collapse-example',
    disabled: false,
    open: false
  },
};
