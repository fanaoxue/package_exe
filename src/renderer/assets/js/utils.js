import db from '~/datastore'
import { ipcRenderer } from 'electron'

// 退出
export function quitApp () {
  // 清空数据
  db.set('orderBillList', []).write()
  db.set('userList', []).write()
  ipcRenderer.send('window-all-closed')
}

// 最小化
export function minApp () {
  ipcRenderer.send('window-all-min')
}

// 最大化
export function maxApp () {
  ipcRenderer.send('window-all-max')
}

// 还原
export function originalApp () {
  ipcRenderer.send('original-window')
}
