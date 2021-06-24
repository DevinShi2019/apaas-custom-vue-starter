const mainDataFieldCodeEditor = {
  position: {
    col: 12
  },
  label: '主数据域代码',
  type: 'TextEditor',
  prop: 'code',
  placeholder: '请输入',
  required: true
}

const mainDataFieldNameChEditor = {
  position: {
    col: 12
  },
  label: '主数据域名称（中文）',
  type: 'TextEditor',
  prop: 'nameCh',
  placeholder: '请输入',
  required: true
}

const mainDataFieldNameEnEditor = {
  position: {
    col: 12
  },
  label: '主数据域名称（英文）',
  type: 'TextEditor',
  prop: 'nameEn',
  placeholder: '请输入',
  required: false
}

const scopeEditor = {
  position: {
    col: 12
  },
  label: '作用域',
  type: 'SelectEditor',
  prop: 'scope',
  placeholder: '请选择',
  options: [
    {
      label: '全局',
      value: 'FULL_DATA'
    },
    {
      label: '组织',
      value: 'CUSTOM_GET'
    }
  ],
  required: true
}

const statusEditor = {
  position: {
    col: 12
  },
  label: '状态',
  type: 'RadioEditor',
  prop: 'enableStatus',
  disabled: true,
  options: [
    {
      label: '启用',
      value: 'ENABLED'
    },
    {
      label: '禁用',
      value: 'DISABLED'
    }
  ]
}

const descriptionEditor = {
  position: {
    col: 24
  },
  label: '说明',
  type: 'TextareaEditor',
  prop: 'description',
  autosize: false
}

export default [
  {
    gutter: 24,
    editors: [
      mainDataFieldCodeEditor
    ]
  },
  {
    gutter: 24,
    editors: [
      mainDataFieldNameChEditor,
      mainDataFieldNameEnEditor
    ]
  },
  {
    gutter: 24,
    editors: [
      scopeEditor,
      statusEditor
    ]
  },
  {
    gutter: 24,
    editors: [
      descriptionEditor
    ]
  }
]
