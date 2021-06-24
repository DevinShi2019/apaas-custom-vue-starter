export default {
  phonePlaceholder: '手机号',
  goBack: '返回',
  loginText: {
    prefix: '已有账号？',
    suffix: '直接登录'
  },
  login: {
    loginText: '登录',
    loginAndBind: '登录并绑定',
    forgetPasswordText: '忘记密码',
    registerText: {
      prefix: '没有账号？',
      suffix: '免费注册'
    },
    orText: '或',
    default: {
      phoneLoginText: '手机验证码登录',
      accountPlaceholder: '手机号或邮箱',
      passwordPlaceholder: '密码'
    },
    phone: {
      accountLoginText: '账号密码登录'
    }
  },
  wxLogin: {
    errorInfo1: '该微信号暂未绑定得帆云账号，',
    errorInfo2: '登录或注册后即可完成绑定。'
  },
  register: {
    namePlaceholder: '姓名',
    termsOfuseText: {
      prefix: '注册即示为同意得帆云产品',
      suffix: '《使用条款》'
    },
    registerText: '注册',
    registerAndBind: '注册并绑定'
  },
  selectOrg: {
    jumpStepText: '暂时跳过该步骤',
    joinOrgText: '加入已有组织',
    joinOrgDesc: '被其他人邀请使用',
    createOrgText: '创建新的组织',
    createOrgDesc: '为企业或团队创建新的组织',
    backStepText: '返回上一步',
    createOrg: {
      createOrgTitle: '创建组织',
      createOrgHelp: '您将默认成为该组织的管理员',
      orgNamePlaceholder: '组织名称',
      orgScalePlaceholder: '组织规模',
      industryPlaceholder: '所属行业',
      locationPlaceholder: '所在地',
      createText: '创建',
      orgScaleOptions: [
        {
          label: '1~50人',
          value: 'MIN'
        },
        {
          label: '50~200人',
          value: 'TWO_HUNDRED'
        },
        {
          label: '200~500人',
          value: 'FIVE_HUNDRED'
        },
        {
          label: '500人以上',
          value: 'MAX'
        }
      ]
    },
    joinOrg: {
      joinOrgTitle: '加入组织',
      joinOrgHelp: '可通过组织管理员获取组织邀请码',
      inviteCodePlaceholder: '组织邀请码',
      entryText: '加入',
      loadingText: '审核中'
    },
    chooseOrg: {
      chooseOrgTitle: '选择组织',
      chooseOrgHelp: '请选择需要购买版本的组织'
    }
  },
  forgetPassword: {
    updatePasswordText: '修改密码'
  },
  formValidate: {
    account: {
      required: '请输入账号',
      format: '请输入正确的手机号或邮箱'
    },
    phone: {
      required: '请输入手机号',
      format: '请输入正确的手机号'
    },
    email: {
      required: '请输入邮箱',
      format: '请输入正确的邮箱'
    },
    code: {
      required: '请输入验证码',
      format: '请输入正确的验证码'
    },
    password: {
      required: '请输入8-32位字母及数字组合',
      format: '请输入8-32位字母及数字组合',
      maxlength: '请输入8-32位字母及数字组合',
      login: {
        required: '请输入账号密码'
      }
    },
    username: {
      required: '请输入姓名',
      maxlength: '姓名长度最多32个字符'
    },
    orgName: {
      required: '请输入组织名称',
      maxlength: '组织名称最多为64个字符'
    },
    orgScale: {
      required: '请选择组织规模'
    },
    inviteCode: {
      required: '请输入组织邀请码',
      format: '请输入正确的组织邀请码'
    },
    companyName: {
      required: '请输入公司名称',
      maxlength: '公司名称长度最多为64个字符'
    },
    dutyParagraph: {
      required: '请输入公司税号'
    },
    receiverName: {
      required: '请输入姓名',
      maxlength: '姓名长度最多为32个字符'
    },
    receiverPhone: {
      required: '请输入手机号',
      format: '请输入正确的手机号'
    },
    deliveryAddress: {
      required: '请输入邮寄地址',
      maxlength: '邮寄地址长度最多为200个字符'
    },
    bankAccountNo: {
      required: '请输入付款银行卡号',
      format: '请输入正确付款银行卡号'
    },
    bankAccountName: {
      required: '请输入付款户名',
      maxlength: '付款户名长度最多200个字符'
    },
    paymentAmount: {
      required: '请输入付款金额'
    },
    paymentDate: {
      required: '请选择付款时间'
    },
    paymentEvidence: {
      required: '请上传汇款凭证'
    },
    industry: {
      required: '请选择所属行业'
    },
    location: {
      required: '请选择所在地'
    },
    eventName: {
      required: '请输入业务事件名称'
    }
  }
}
