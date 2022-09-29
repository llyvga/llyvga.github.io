import popup from './src/main.vue'

popup.install = Vue => {
  Vue.component(popup.name, popup)
}

export default popup