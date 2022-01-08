// 单一APP日志插件
const SingleWorkbenchExtension = {
  code: 'SINGLE_WORKBENCH',
  name: '私有化工作台',
  blocks: [
    {
      code: 'SingleWorkbenchConfig',
      name: '私有化工作台模块',
      funs: []
    }
  ],
  versions: ['TRIAL_EDITION', 'TEAM_EDITION', 'STANDARD_EDITION', 'PREMIUM_EDITION'],
  enable: true,
  alias: 'singleWorkbench',
  mapping: {
    enableSingleWorkbench: 'SINGLE_WORKBENCH.SingleWorkbenchConfig'
  }
}

export default SingleWorkbenchExtension
