import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno
} from 'unocss'

import { KtbBtn } from './unocss-rules/rule.mjs'

export default defineConfig({
  theme: {

  },
  rules: [
    KtbBtn
  ],
  shortcuts: [
    {
      'active': 'text-white',
    },
    [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg hover:bg-${c}-800`],
  ],

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
  ]
})