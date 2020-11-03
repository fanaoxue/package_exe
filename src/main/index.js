'use strict'

import { app, BrowserWindow, Menu, globalShortcut } from 'electron'

// import bus from '../renderer/assets/js/bus'

import '../renderer/store'

const ipcMain = require('electron').ipcMain

const httpServer = require('http-server')
// console.log('httpServer: \n', httpServer.HttpServer)

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */

// const isDev = process.env.NODE_ENV === 'development'

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080/#/login`
  : `file://${__dirname}/index.html#/login`

if (process.env.NODE_ENV !== 'development') { // 打包的时候
  httpServer.createServer({
    root: './resources/app.asar/dist/electron'
  }).listen(9999)
  httpServer.createServer({
    root: './resources/app.asar/dist/electron'
  }).listen(9998)
} else { // 运行的时候使用
  httpServer.createServer().listen(9999)
  httpServer.createServer().listen(9998)
}

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 768,
    width: 1366,
    show: true,
    useContentSize: true,
    resizable: false,
    frame: false, // 无边框
    transparent: true, // 透明
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show() // 初始化后在显示
  })

  // 去掉默认菜单栏
  Menu.setApplicationMenu(null)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow()
  // 注册快捷键事件
  globalShortcut.register('Ctrl+Shift+R', () => {
    if (mainWindow) {
      mainWindow.webContents.openDevTools()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    app.exit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/*
 * IPC事件监听集合
*/
// hyb事件监听与处理
ipcMain.on('receivingOrder', (e, arg) => {
  if (arg.type === 'receivingOrderSuccess') { // hyb发送事件：接单成功
    if (mainWindow) {
      mainWindow.webContents.send('receivingOrderSuccess', arg)
    }
  } else if (arg.type === 'newOrders') { // klb发送事件：新增运单
    if (mainWindow) {
      mainWindow.webContents.send('newOrders', arg)
    }
  } else if (arg.type === 'finalWaybill') { // hyb发送事件：回单上传完成终结运单
    if (mainWindow) {
      mainWindow.webContents.send('finalWaybill', arg)
    }
  } else if (arg.type === 'checkWaybillDetail') { // hyb发送事件：查询运单详情
    if (mainWindow) {
      mainWindow.webContents.send('checkWaybillDetail', arg)
    }
  } else if (arg.type === 'endWayBill') { // klb发送事件：终结运单
    if (mainWindow) {
      mainWindow.webContents.send('endWayBill', arg)
    }
  } else if (arg.type === 'prePaySuccess') { // hyb发送事件：提前收款成功
    if (mainWindow) {
      mainWindow.webContents.send('prePaySuccess', arg)
    }
  } else if (arg.type === 'checkTaskFinishEmit') { // hyb发送事件：领取元宝更新任务状态
    if (mainWindow) {
      mainWindow.webContents.send('checkTaskFinishEmit', arg)
    }
  } else if (arg.type === 'applySuccess') { // klb发送事件：申请支付成功
    if (mainWindow) {
      mainWindow.webContents.send('applySuccess', arg)
    }
  } else if (arg.type === 'auditOrPay') { // 审核业务 和 支付业务
    if (mainWindow) {
      mainWindow.webContents.send('auditOrPay', arg)
    }
  } else if (arg.type === 'applyInvoice') {
    if (mainWindow) {
      mainWindow.webContents.send('applyInvoice', arg)
    }
  }
})

// 监听关闭窗口事件
ipcMain.on('window-all-closed', () => {
  app.quit()
})

// 监听窗口最小化事件
ipcMain.on('window-all-min', () => {
  if (mainWindow) {
    mainWindow.minimize()
  }
})

// 监听窗口最大化事件
ipcMain.on('window-all-max', () => {
  // if (mainWindow) {
  //   mainWindow.maximize()
  // }
  // bus.$emit('windowMax', {hide: false})
  if (mainWindow) {
    mainWindow.maximize()
    mainWindow.webContents.send('windowMax', {hide: false})
  }
})

// 还原窗口
ipcMain.on('original-window', () => {
  // if (mainWindow) {
  //   mainWindow.unmaximize()
  // }
  // bus.$emit('originalWindow', {hide: true})
  if (mainWindow) {
    mainWindow.unmaximize()
    mainWindow.webContents.send('originalWindow', {hide: true})
  }
})
