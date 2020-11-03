let BASE_URL

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = ''
    break
  case 'production':
    BASE_URL = ''
    break
}

const HYB_WBS_H5_URL = `http://127.0.0.1:9999/static/thirdPage/hyb/wbs_h5/index.html?time=${Math.floor(Math.random() * 100)}`
const KLB_NGCBAPP_H5_URL = `http://127.0.0.1:9999/static/thirdPage/klb/ngcbapp_h5/dist/index.html?time=${Math.floor(Math.random() * 100)}`
const YWJL_XMJL_GYLJR_GCB_URL = `http://127.0.0.1:9999/static/thirdPage/ywjl/m_business_record_h5/dists/index.html?time=${Math.floor(Math.random() * 100)}`
const YWJL_CW_GYLJR_GCB_URL = `http://127.0.0.1:9999/static/thirdPage/ywjl/m_business_record_h5/dists/index.html?time=${Math.floor(Math.random() * 100)}`
// dataV连接
const DATAV_GAILAN_URL = `https://datav.aliyuncs.com/share/d08d8c6d73302f8a33e9ecd36a519891?adcode=100000&time=${Math.floor(Math.random() * 100)}`
const DATAV_YUNDAN_URL = `https://datav.aliyuncs.com/share/ca5ef51bf49ae4beee4656123fe486f6?adcode=100000&time=${Math.floor(Math.random() * 100)}`
const DATAV_JIESUAN_URL = `https://datav.aliyuncs.com/share/9bbf2c44c72f2a63b6f901e4fe487983?adcode=100000&time=${Math.floor(Math.random() * 100)}`

export {
  BASE_URL,
  HYB_WBS_H5_URL,
  KLB_NGCBAPP_H5_URL,
  YWJL_XMJL_GYLJR_GCB_URL,
  YWJL_CW_GYLJR_GCB_URL,
  DATAV_GAILAN_URL,
  DATAV_YUNDAN_URL,
  DATAV_JIESUAN_URL
}
