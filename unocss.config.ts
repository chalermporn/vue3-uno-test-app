import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWind,
} from 'unocss'

export default defineConfig({
  rules: [
    ['custom-rule', { color: 'red' }]
  ],
  shortcuts: {
    'custom-shortcut': 'text-lg text-orange hover:text-teal'
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetWind(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
  ]
})