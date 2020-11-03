import Vue from 'vue'
import {
  Toast,
  Loading,
  Icon,
  Dialog,
  Popup,
  Field,
  Cell,
  CellGroup,
  Button,
  Lazyload,
  Picker
} from 'vant'

Vue.use(Toast)
  .use(Loading)
  .use(Icon)
  .use(Dialog)
  .use(Popup)
  .use(Field)
  .use(Cell)
  .use(CellGroup)
  .use(Button)
  .use(Lazyload, {
    lazyComponent: true,
    loading: 'https://chpp.log56.com/img/loading.gif',
    error: 'https://chpp.log56.com/img/error.png'
  })
  .use(Picker)

Toast.setDefaultOptions({
  forbidClick: true
})
Toast.setDefaultOptions('loading', {
  forbidClick: true,
  duration: 0
})
