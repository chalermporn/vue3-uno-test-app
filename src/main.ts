import { createPinia } from 'pinia'
import { createApp } from 'vue'
import ViewUiPlus from 'view-ui-plus'

import App from './App.vue'
import router from './router'

// 'uno:[layer-name].css'
import 'uno:components.css'
// layers that are not 'components' and 'utilities' will fallback to here
import 'uno.css'
// your own CSS
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './assets/main.css'
// "utilities" layer will have the highest priority
import 'uno:utilities.css'

import formatHelper from "./helpers/formatHelper"

const app = createApp(App)
// app.config.globalProperties.$filters = formatHelper

app.use(createPinia())
  .use(router)
  .use(ViewUiPlus)
  .config.globalProperties.$filters = {
  ...formatHelper
}

app.mount('#app')
