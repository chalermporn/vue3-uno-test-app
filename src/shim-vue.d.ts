// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }

// declare module '*.vue' {
//   import { DefineComponent } from 'vue'
//   const component: DefineComponent
//   export default component
// }


// declare module '@vue/runtime-core' {
//   export interface ComponentCustomProperties {
//     $filters: Record<any, any>
//   }
// }

// declare module 'vue' {
//   import { CompatVue } from 'vue'
//   const Vue: CompatVue
//   export default Vue
//   export * from '@vue/runtime-dom'
//   const { configureCompat } = Vue
//   export { configureCompat }
// }