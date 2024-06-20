import type { Meta, StoryObj } from '@storybook/vue3';

import { ref, watch } from 'vue';
import hljs from 'highlight.js';
import CardComponent from './index.vue'
import CodeEditor from 'simple-code-editor';


const meta: Meta<typeof CardComponent> = {
  title: 'Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    id: { description: 'Parameter to set id for card', type: 'string' },
    shadow: { description: 'Parameter to set shadow for card', options: ["none", "static", "hover"] },
    type: { description: 'Parameter to set variant for card', options: ["div", "section", "article"] },
    variant: { description: 'Parameter to set the card type', options: ["default", "success", "error", "info", "warning", "primary", "secondary"] },
  },
};

export default meta;

type Story = StoryObj<typeof CardComponent>;

export const Card: Story = {
  render: (args) => ({
    components: { CardComponent, CodeEditor },
    setup() {
      const apiReference = ref()
      const codeEditorRef = ref()
      const propsCode: Record<string, Record<string, string | boolean>[]> = {
        typescript: [
          {
            name: 'id',
            default: '---',
            type: 'string',
            description: 'Parameter to set id for card',
            required: true,
          },
          {
            name: 'shadow',
            default: 'none',
            type: '"none", "static", "hover"',
            description: 'Parameter to set shadow for card',
            required: false,
          },
          {
            name: 'variant',
            default: 'default',
            type: '"default", "success", "error", "info", "warning", "primary", "secondary"',
            description: 'Parameter to set the card type',
            required: false,
          },
          {
            name: 'type',
            default: 'div',
            type: '"div", "section", "article"',
            description: 'Parameter to set variant for card',
            required: false,
          }
        ],
        javascript: [
          {
            name: 'id',
            default: '---',
            type: 'string',
            description: 'Parameter to set id for card',
            required: true,
          },
          {
            name: 'type',
            default: 'div',
            type: '"div", "section", "article"',
            description: 'Parameter to set type for card',
            required: false,
          }
        ],
      }

      const codeMap: Record<string, string> = {
        typescript: `<template>
  <Card :type :shadow :variant :id>
    <template #header> Lorem ipsum</template>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue mollis ligula in efficitur. Cras consectetur erat ut felis iaculis, a bibendum elit laoreet. Mauris vel viverra lacus, non dapibus nibh.
    </template>
    <template #footer> Lorem ipsum</template>

    <template #addtional> Addtional options </template>
  </Card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Card } from "pea-vuejs"

const type = ref('div')
const shadow = ref('shadow')
const variant = ref('default')
const id = ref('card')
</script>`,
        javascript: `<template>
  <Card.Root :id :type>
    <Card.Header>
      Lorem ipsum
    </Card.Header>
    <Card.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue mollis ligula in efficitur. Cras consectetur erat ut felis iaculis, a bibendum elit laoreet. Mauris vel viverra lacus, non dapibus nibh.
    </Card.Content>
    <Card.Footer>
      Lorem ipsum
    </Card.Footer>
  </Card.Root>
</template>
  
<script lang="ts" setup>
import { Card } from "pea-vuejs/headless"

const type = ref('div')
const id = ref('card')
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


      watch(() => [args.type, args.shadow, code.value], () => {
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
        <h3 class="text-5xl font-bold">Card</h3>
        <p class="text-base text-black/60">The Card component is a versatile container used to group related content and interface elements, such as text, images, and buttons, in an organized and aesthetically pleasing manner. It can be styled with CSS and customized through properties and slots to meet various application requirements.</p>
      </div>
      <br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <strong class="text-2xl font-bold"># Example of component usage:</strong>
        <div class="p-8 h-70 bg-black/5 rounded-t-lg border border-black/5 relative flex items-center justify-center">
           
    <CardComponent :type="args.type" :shadow="args.shadow" :variant="args.variant" :id="args.id">
      <template #header> Lorem ipsum</template>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue mollis ligula in efficitur. Cras consectetur erat ut felis iaculis, a bibendum elit laoreet. Mauris vel viverra lacus, non dapibus nibh.
      </template>
      <template #footer> Lorem ipsum</template>

      <template #addtional> Addtional options </template>
    </CardComponent>
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
          <p class="text-base text-black/60">Ensuring accessibility for the card component involves providing semantic HTML structure, such as using <article> or <section> tags, and including appropriate ARIA roles and labels. Additionally, it is crucial to maintain proper color contrast, keyboard navigability, and screen reader compatibility to ensure all users can access and interact with the content effectively.</p>
        </div>
      </div>
    </div>
  `,
  }),
  args: {
    id: 'card-primary',
    type: 'div',
    shadow: 'none',
    variant: 'default'
  },
};
