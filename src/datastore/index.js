import Datastore from 'lowdb'
import LodashId from 'lodash-id'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'
// import fs from 'fs-extra'
import fs from 'fs'
// 引入remote模块
import { app, remote } from 'electron'
// package.json
import pkg from '../../package.json'
// 根据process.type来分辨在哪种模式使用哪种模块
const APP = process.type === 'renderer' ? remote.app : app

// 获取electron应用的用户目录
const STORE_PATH = APP.getPath('userData')
console.log('获取electron应用的用户目录:', STORE_PATH)
// wuxi - test - dev C:\Users\Administrator\AppData\Roaming\Electron
// wuxi - test - prod C:\Users\Administrator\AppData\Roaming\klbhyb-electron
if (process.type !== 'renderer') {
  // 如果不存在路径
  if (!fs.pathExistsSync(STORE_PATH)) {
    // 就创建
    fs.mkdirpSync(STORE_PATH)
  }
}

// 以同步的方式初始化lowdb读写的json文件名以及存储路径
const adapter = new FileSync(path.join(STORE_PATH, `/${pkg.name}_lowdb.json`))

// lowdb接管该文件
const db = Datastore(adapter)
// 通过._mixin()引入lodash_id唯一id插件
db._.mixin(LodashId)

// 运单列表
db.set('orderBillList', []).write()
// 待确认列表 - 初始化数据
/* if (!db.has('orderBillList').value()) {
  const tempData = []
  db.set('orderBillList', []).write()
  tempData.forEach(item => {
    db.get('orderBillList').insert(item).write()
  })
} */

// 登陆列表 - 初始化数据
// if (db.has('userList').value()) {
const tempData = [
  {
    userName: '18017887897',
    passWord: '18017887897'.slice('18017887897'.length - 4)
  },
  {
    userName: '18655931156',
    passWord: '18655931156'.slice('18655931156'.length - 4)
  },
  {
    userName: '13750806623',
    passWord: '13750806623'.slice('13750806623'.length - 4)
  },
  {
    userName: '18055100134',
    passWord: '18055100134'.slice('18055100134'.length - 4)
  },
  {
    userName: '15755175406',
    passWord: '15755175406'.slice('15755175406'.length - 4)
  },
  {
    userName: '17730155116',
    passWord: '17730155116'.slice('17730155116'.length - 4)
  },
  {
    userName: 'admin',
    passWord: 'admin'
  }
]
db.set('userList', []).write()
tempData.forEach(item => {
  db.get('userList').insert(item).write()
})
// }

export default db // 暴露出去
