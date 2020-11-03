import db from '../datastore'

const Table = 'orderBillList'

// 获取待收款列表数据
export function getOrderBillList () {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        reCode: 0,
        reInfo: '处理成功',
        dataTest: db.get(Table),
        result: {
          // allWayBillList: db.getState(Table),
          orderBillList: db.getState(Table)[Table]
        }
      })
    } catch (err) {
      return reject(new Error({
        reCode: 400,
        reInfo: err.message
      }))
    }
  })
}

// 获取指定运单的详细数据
export function getOrderBillDetail (data) {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        reCode: 0,
        reInfo: '处理成功',
        result: {
          info: db.get(Table).find({taxWaybillId: data.taxWaybillId}).value()
        }
      })
    } catch (err) {
      return reject(new Error({
        reCode: 400,
        reInfo: err.message
      }))
    }
  })
}
