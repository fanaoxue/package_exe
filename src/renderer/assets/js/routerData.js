export const routerData = [
  {
    pageName: '数据概览',
    index: '1',
    children: [
      {
        pageName: '运力概览',
        index: '1-1'
      },
      {
        pageName: '运单信息',
        index: '1-2'
      },
      {
        pageName: '结算信息',
        index: '1-3'
      }
    ]
  },
  {
    pageName: '产品演示',
    index: '2',
    children: [
      {
        pageName: '供应链金融',
        index: '2-1',
        difference: true,
        children: [
          {
            pageName: '快路宝(企业)',
            index: '2-1-1'
          },
          {
            pageName: '好运宝(司机)',
            index: '2-1-2'
          },
          {
            pageName: '管车宝(项目经理)',
            index: '2-1-3'
          },
          {
            pageName: '管车宝(财务)',
            index: '2-1-4'
          }
        ]
      }
    ]
  },
  {
    pageName: '往期案例',
    index: '3',
    children: [
      {
        pageName: '动画说明',
        index: '3-1-1'
      },
      {
        pageName: '往期数据',
        index: '3-1-2'
      }
    ]
  }
]
