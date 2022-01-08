// 单一APP日志插件
const SingleAppExtension = {
  code: 'SINGLE_APP',
  name: '单一APP',
  blocks: [
    {
      code: 'SingleAppConfig',
      name: '单一APP模块',
      funs: []
    }
  ],
  versions: ['TRIAL_EDITION', 'TEAM_EDITION', 'STANDARD_EDITION', 'PREMIUM_EDITION'],
  enable: true,
  alias: 'singleApp',
  mapping: {
    enableSingleApp: 'SINGLE_APP.SingleAppConfig'
  }
}

export default SingleAppExtension
