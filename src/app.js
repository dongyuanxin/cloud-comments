import Layer from './components/layer/layer'

const App = function () {
  const dom = document.querySelector('#app')
  const layer = new Layer()
  dom.innerHTML = layer.template
}

window.App = App