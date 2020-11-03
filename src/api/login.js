import db from '../datastore'

const Table = 'userList'

export function getLogin (data) {
  // console.log('输入的登录名', data)
  return new Promise((resolve, reject) => {
    try {
      resolve({
        reCode: 0,
        reInfo: '处理成功',
        result: {
          userList: db.get(Table).find({userName: data.userName}).value()
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
