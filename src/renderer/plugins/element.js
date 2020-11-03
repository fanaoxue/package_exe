import Vue from 'vue'
import {
  Icon,
  Message,
  MessageBox
} from 'element-ui'

Vue.use(Icon)
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$confirm = MessageBox.confirm
