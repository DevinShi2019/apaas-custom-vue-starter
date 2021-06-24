export default {
  accountInfoLabel: '账号信息',
  personalInfoLabel: '个人资料',
  accountSecurityLabel: '账号安全',
  systemSettingLabel: '系统设置',
  personalOrderLabel: '我的订单',
  accountInfo: {
    myOrgs: '我的组织',
    exitOrg: '退出组织',
    exitOrgPlaceholder: '请输入组织名称以确定退出该组织',
    teamSize: '团队人数',
    validate: {
      orgName: {
        required: '请输入组织名称'
      }
    },
    orgName: '组织名称',
    upgrade: '续费升级',
    inputOrgNameError: '输入的组织名称不正确',
    exitSuccess: '退出成功',
    expire: '到期'
  },
  profile: {
    clickToUpdateAvatar: '点击更换头像',
    avatarFormat: '只支持png和jpg格式的图片',
    inputPlase: '请输入',
    pickPlase: '请选择',
    name: '姓名',
    gender: '性别',
    secrecy: '保密',
    male: '男',
    female: '女',
    birthday: '生日',
    position: '职位',
    company: '公司名称',
    personalProfile: '个人简介',
    saveProfile: '保存资料',
    validate: {
      username: {
        required: '请输入姓名',
        maxlength: '姓名长度最多32个字符'
      },
      position: {
        maxlength: '职位长度最多32个字符'
      },
      company: {
        maxlength: '公司名称长度最多64个字符'
      },
      personalProfile: {
        maxlength: '个人简介长度最多200个字符'
      }
    },
    required: '请填写必填信息'
  },
  accountSecurity: {
    inputPlase: '请输入',
    pickPlase: '请选择',
    loginAccount: '登录账号',
    phoneNumber: '手机号',
    validateCode: '验证码',
    getValidateCode: '获取验证码',
    inputValidateCodePlase: '请输入验证码',
    inputPwd: {
      password: '得帆云密码',
      required: '请输入密码'
    },
    updatePhoneNumber: '修改手机号',
    email: '邮箱',
    updateEmail: '修改邮箱',
    thirdPartyAccount: '第三方账号',
    thirdPartyAccounts: {
      weixin: '微信',
      qyweixin: '企业微信',
      feishu: '飞书',
      dingtalk: '钉钉',
      zhifubao: '支付宝',
      qq: 'QQ'
    },
    bind: '绑定',
    cancelBind: '解除绑定',
    cancelBindInfo: '将无法使用第三方账号进行登录，是否确定解除绑定？',
    settingPassword: '密码设置',
    sourcePassword: '原密码',
    newPassword: '新密码',
    updatePassword: '修改密码',
    validate: {
      phone: {
        required: '请输入手机号',
        format: '请输入正确的手机号'
      },
      email: {
        required: '请输入邮箱',
        format: '请输入正确的邮箱'
      },
      sourcePassword: {
        required: '请输入原密码'
      },
      newPassword: {
        required: '请输入新密码',
        format: '请输入8-32位字母及数字组合'
      },
      code: {
        required: '请输入验证码',
        format: '请输入正确的验证码'
      }
    }
  },
  systemSetting: {
    systemLang: '系统语言',
    systemLangPlaceholder: '目前仅支持中文、英文',
    chinese: '中文',
    desktopNotity: '桌面通知',
    desktopNotityPlaceholder: '系统桌面将弹出气泡通知新消息（仅支持 Chrome 、Firefox 和 Safari 浏览器）'
  }
}
