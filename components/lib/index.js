import Popup from './popup'

const components = {
  Popup
}

const install = Vue => {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

const API = {
  install
}

export default API
