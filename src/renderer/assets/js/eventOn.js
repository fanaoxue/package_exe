import bus from '@/assets/js/bus'
import db from '~/datastore'
import { ipcRenderer } from 'electron'

/* 运单列表
  hybState：
    0：未接单 - 待确认
    1：已接单 - 未到货
    2：已终结 - 待收款
    3：已确认 - 已完成
*/

// 收到主进程发射的 - 新增运单事件
ipcRenderer.on('newOrders', (e, message) => {
  message.obj.hybState = '0' // 将运单状态改成待接单状态 - klb传给更好
  message.obj.invoiceState = '0'
  message.obj.taskInfoLi = [
    {
      id: 'jd' + message.obj.taxWaybillId,
      status: '1'
    }
  ] // 给运单生成一个任务ID、status的 list
  message.obj.taskStatess = 0 // 变更任务状态触发监听使用
  console.log('新增运单，通知hyb，并更新lowDB待接单列表数据', message.obj)
  // 先去重再写入
  db.get('orderBillList').remove({ taxWaybillId: message.obj.taxWaybillId }).write()
  db.get('orderBillList').push(message.obj).write()
})

// 收到主进程发射的 - 接单成功事件
ipcRenderer.on('receivingOrderSuccess', (e, message) => {
  console.log('接单成功，通知klb，并更新lowDB待接单与未到货列表数据', message)
  // 先删除待确认 - 将删除后更新到未到货里
  db.get('orderBillList').find({taxWaybillId: message.taxWaybillId}).assign({hybState: '1'}).write()
  // 1.将该条运单的接单任务状态更新
  db.get('orderBillList').find({taxWaybillId: message.taxWaybillId}).get('taskInfoLi').find({id: 'jd' + message.taxWaybillId}).assign({status: '2'}).write()
  // 2.新增一条该运单的传回单任务
  db.get('orderBillList').find({taxWaybillId: message.taxWaybillId}).get('taskInfoLi').push({
    id: 'chd' + message.taxWaybillId,
    status: '1'
  }).write()
  bus.$emit('noticeInfo', { taxWaybillId: message.taxWaybillId })
})

// 收到主进程发射的 - 回单上传完成终结运单
ipcRenderer.on('finalWaybill', (e, message) => {
  console.log('回单上传成功，通知klb，并更新lowDB未到货与待收款列表数据', message)
  // 先删除未到货 - 将删除后更新到待收款里
  db.get('orderBillList').find({taxWaybillId: message.taxWaybillId}).assign({
    hybState: '2',
    hd: message.uploadImg,
    drawMoneyState: '3',
    waybillFlag: '1'
  }).write()
  // 1.将该条运单的传回单任务状态更新
  db.get('orderBillList').find({taxWaybillId: message.taxWaybillId}).get('taskInfoLi').find({id: 'chd' + message.taxWaybillId}).assign({status: '2'}).write()
  // 2.新增一条该运单的提前收款任务
  db.get('orderBillList').find({taxWaybillId: message.taxWaybillId}).get('taskInfoLi').push({
    id: 'tqsk' + message.taxWaybillId,
    status: '1'
  }).write()
  bus.$emit('noticeInfo', { taxWaybillId: message.taxWaybillId })
})

// 收到主进程发射的 - 提前收款成功事件
ipcRenderer.on('prePaySuccess', (e, message) => {
  console.log('提前收款成功', message)
  // 更新到已完成里
  db.get('orderBillList').find({taxWaybillId: message.taxWaybillId}).assign({
    hybState: '3',
    applyState: '3'
  }).write()
  // 将该条运单的提前收款任务状态更新-完成
  db.get('orderBillList').find({taxWaybillId: message.taxWaybillId}).get('taskInfoLi').find({id: 'tqsk' + message.taxWaybillId}).assign({status: '2'}).write()
  bus.$emit('checkWaybillDetail', message)
  bus.$emit('noticeInfo', { taxWaybillId: message.taxWaybillId })
})

// 终结运单修改db
ipcRenderer.on('endWayBill', (e, message) => {
  console.log('快路宝终结了运单！', message)
  db.get('orderBillList').find({taxWaybillId: message.obj.taxWaybillId}).assign({
    wayBillState: '9',
    hd: message.obj.hd
  }).write()
  bus.$emit('noticeInfo', { taxWaybillId: message.obj.taxWaybillId })
})

// klb申请支付完毕修改db
ipcRenderer.on('applySuccess', (e, message) => {
  console.log('快路宝支付了运单！', message)
  db.get('orderBillList').find({taxWaybillId: message.obj.taxWaybillId}).assign({
    applyState: '1'
  }).write()
  bus.$emit('noticeInfo', { taxWaybillId: message.obj.taxWaybillId })
})

// 审核业务 和 支付业务
ipcRenderer.on('auditOrPay', (e, message) => {
  console.log('审核业务 和 支付业务！', message)
  let _data = {applyState: message.applyState}
  if (message.refusedReason && message.applyState === '0') {
    _data.refusedReason = message.refusedReason
  }
  db.get('orderBillList').find({taxWaybillId: message.taxWaybillId}).assign(_data).write()
})
// 开票状态
ipcRenderer.on('applyInvoice', (e, message) => {
  console.log('更改开票状态！', message)
  db.get('orderBillList').find({taxWaybillId: message.taxWaybillId}).assign({invoiceState: message.invoiceState}).write()
})
// 收到主进程发射的 - 查询运单详情数据
ipcRenderer.on('checkWaybillDetail', (e, message) => {
  console.log('查询运单详情数据')
  bus.$emit('checkWaybillDetail', message)
})

// 收到主进程发射的 - 领取任务奖励 - 更新任务状态为3
ipcRenderer.on('checkTaskFinishEmit', (e, message) => {
  console.log('领取任务奖励！>>> 更新任务状态为3！', message)
  db.get('orderBillList').find({taxWaybillId: message.taxWaybillId}).get('taskInfoLi').find({id: message.taskId}).assign({status: '3'}).write()
  bus.$emit('noticeInfo', { taxWaybillId: message.taxWaybillId })
})

// 收到主进程发射的 - 全屏展示
ipcRenderer.on('windowMax', (e, message) => {
  // console.log('全屏展示')
  bus.$emit('windowMax', message)
})

// 收到主进程发射的 - 还原
ipcRenderer.on('originalWindow', (e, message) => {
  // console.log('全屏还原')
  bus.$emit('originalWindow', message)
})
