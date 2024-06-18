import type { Meta, StoryObj } from '@storybook/vue3';

import { ref, watch } from 'vue';
import hljs from 'highlight.js';
import AlertComponent from './index.vue'
import CodeEditor from 'simple-code-editor';


const meta: Meta<typeof AlertComponent> = {
  title: 'Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  argTypes: {
    heading: { description: 'Parameter to set the heading alert' },
    type: { description: 'Parameter to set the alert type', options: ["default", "success", "error", "info", "warning"] },
  },
};

export default meta;

type Story = StoryObj<typeof AlertComponent>;

export const Alert: Story = {
  render: (args) => ({
    components: { AlertComponent, CodeEditor },
    setup() {
      const apiReference = ref()
      const codeEditorRef = ref()
      const propsCode: Record<string, Record<string, string | boolean>[]> = {
        typescript: [
          {
            name: 'heading',
            default: '---',
            type: 'string',
            description: 'Parameter to set the heading alert',
            required: false,
          },
          {
            name: 'type',
            default: 'default',
            type: '"default", "success", "error", "info", "warning"',
            description: 'Parameter to set the alert type',
            required: false,
          }
        ],
        javascript: [],
      }

      const codeMap: Record<string, string> = {
        typescript: `<template>
  <Alert :type heading="Lorem ipsum" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Alert } from "pea-vuejs"

const type = ref('success')
</script>`,
        javascript: `<template>
  <Alert.Root>
    <Alert.Heading>
      Lorem ipsum
    </Alert.Heading>
    <Alert.Content>
      In hac habitasse platea dictumst. Quisque blandit est eu nunc eleifend elementum. Praesent tortor turpis, lacinia eget hendrerit in, pharetra id arcu. 
    </Alert.Content>
  </Alert.Root>
</template>
  
<script lang="ts" setup>
import { Alert } from "pea-vuejs/headless"
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


      watch(() => [args.type, args.heading, code.value], () => {
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
        <h3 class="text-5xl font-bold">Alert</h3>
        <p class="text-base text-black/60">The Alert component is used to display important messages or warnings to the user, often with the ability to specify the level of importance (e.g., success, warning, error). It can include icons, text, and close buttons, providing visual cues to the user about the actions that need to be taken.</p>
      </div>
      <br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <strong class="text-2xl font-bold"># Example of component usage:</strong>
        <div class="p-8 h-40 bg-black/5 rounded-t-lg border border-black/5 relative flex items-center justify-center">
           <AlertComponent :heading="args.heading" :type="args.type">In hac habitasse platea dictumst. Quisque blandit est eu nunc eleifend elementum. Praesent tortor turpis, lacinia eget hendrerit in, pharetra id arcu. </AlertComponent>
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
          <p class="text-base text-black/60">Accessibility for the Alert component involves ensuring that the messages are easily perceivable by all users, including those using screen readers. This includes using ARIA roles and properties, such as role="alert", to convey the nature of the message and ensuring focus management so that the alert is announced immediately when it appears.</p>
        </div>
        <div>
          For more info go to -> <a class=" text-blue-600" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role" target="__blank">alert</a> 
        </div>
      </div>
    </div>
  `,
  }),
  args: {
    type: 'default',
    heading: 'Lorem ipsum',
  },
};
