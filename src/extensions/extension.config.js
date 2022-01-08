export class Version {
  constructor(version) {
    this.code = version.code
    this.name = version.name
    this.level = version.level
    this.desc = version.desc
    this.endDate = version.endDate
  }
}

/**
 * 定义 Fun
 * @export
 * @class Fun
 */
export class Fun {
  constructor(fun) {
    this.code = fun.code
    this.name = fun.name
    this.versions = fun.versions
    this.enable = fun.enable
  }
}

/**
 * 定义 Block
 * @export
 * @class Block
 */
export class Block {
  constructor(block) {
    this.code = block.code
    this.name = block.name
    this.funs = block.funs || []
    this.versions = block.versions
    this.enable = block.enable
  }
}

export class ExtensionEngineConfig {
  constructor(config) {
    /**
     * 当前版本
     */
    this.versions = config.versions || []

    /**
     * 全局禁用某个功能，参数如下，全局功能禁用，会直接计算新的插件可用性
     * {
     *    extension: ${extensionCode}  // 必填
     *    block: ${blockCode}          // 选填
     *    fun: ${funCode}              // 选填
     * }
     */
    this.blackExtensions = config.blackExtensions || []
  }
}

/**
 * 定义插件
 * @export
 * @class Extension
 */
export class Extension {
  constructor(extension) {
    this.code = extension.code
    this.name = extension.name
    this.blocks = extension.blocks || []
    this.versions = extension.versions
    this.enable = extension.enable

    this.initBlocks(this.blocks, this)
  }

  // 初始化 blocks 和 funs 。初始化默认值
  initBlocks(blocks, extension) {
    if (blocks && Array.isArray(blocks)) {
      blocks.forEach(block => {
        if (!block.versions) {
          block.versions = extension.versions
        }
        if (typeof block.enable === 'undefined') {
          block.enable = extension.enable
        }
        this.initFuns(block.funs, block)
      })
    }
  }

  initFuns(funs, block) {
    if (funs && Array.isArray(funs)) {
      funs.forEach(fun => {
        if (!fun.versions) {
          fun.versions = block.versions
        }
        if (typeof fun.enable === 'undefined') {
          fun.enable = block.enable
        }
      })
    }
  }
}

// 所有插件
export const ALL_EXTENSION = [
  'PLUGIN_WE_COM',
  'PLUGIN_EVENT',
  'PLUGIN_COMMENT',
  'PLUGIN_LOG',
  'PLUGIN_FEI_SHU',
  'PLUGIN_OCR',
  'PLUGIN_FEISHU_CLIENT',
  'PLUGIN_LOGO',
  'PLUGIN_CUSTOM_MSG',
  'PLUGIN_DINGDING',
  'PLUGIN_ELECSIGN',
  'PLUGIN_LIVE_PREVIEW'
]
