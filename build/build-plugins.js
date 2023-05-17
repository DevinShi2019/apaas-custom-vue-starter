const shell = require('shelljs')
const fs = require('fs')
const path = require('path')
const zipper = require('zip-local')
const colors = require('colors')
const envDefine = require('./build-en-define.json')
const md5 = require('md5')

const lib = async (cmd, program) => {
  const customModule = cmd.custom
  const crypto = cmd.crypto === '-c'
  const noZip = cmd.noZip === '-Z'
  // 获取指定 custom 目录下的apaas.json
  const customModulePath = path.resolve(process.cwd(), 'src/custom', customModule)

  const customModuleConfigPath = path.resolve(customModulePath, 'apaas.json')
  if (!fs.existsSync(customModuleConfigPath)) {
    console.log(`Error: 自开发模块 ${customModule} 下不存在需要的 apaas.json 文件`['red'])
    console.log(`exit`['red'])
    process.exit(0)
  }

  const apaasConfig = JSON.parse(fs.readFileSync(customModuleConfigPath))

  const buildArray = envDefine
    .map((_) => {
      if (!apaasConfig[_]) {
        return
      }
      const newConfig = { ...apaasConfig }
      delete newConfig[_]
      newConfig.outputName = md5(apaasConfig.code)
      return {
        // 排第一，且不会被覆盖
        entry: apaasConfig[_],
        ...newConfig,
        entry: apaasConfig[_],
        type: _
      }
    })
    .filter((item) => item)

  const result = buildArray.map((config) => doLib(config, customModulePath, crypto))
  if (result === [-1, -1]) {
    process.exit(0)
  }
  const cryptoPath = crypto ? 'crypto/' + md5(apaasConfig.code) : apaasConfig.code
  writeApaasJson(cryptoPath, apaasConfig)
  if (!noZip) {
    zip(cryptoPath, cryptoPath)
  }
}

/**
 * @params apaasModuleConfig 源配置信息
 * @params customModulePath 打包入口
 */
const doLib = (apaasModuleConfig, customModulePath, crypto) => {
  const customModuleEntryPath = path.resolve(customModulePath, apaasModuleConfig.entry)

  const moduleType = apaasModuleConfig.type

  const outputName = (crypto ? 'crypto/' + md5(apaasModuleConfig.code) : apaasModuleConfig.code) + '/' + moduleType

  if (!fs.existsSync(customModuleEntryPath)) {
    console.log(`Error: apaas.json 指定的entry: ${apaasModuleConfig.entry} 的路径错误 `['red'])
    console.log(`error path is ${customModuleEntryPath}`['red'])
    return -1
  }

  const customCliPath = path.resolve(
    process.cwd(),
    './node_modules/@vue/cli-service/bin/vue-cli-service.js'
  )

  // 使用vue build 打包，并生成文件
  shell.exec(
    `node ${customCliPath} build --target lib --name ${apaasModuleConfig.outputName} --dest ${outputName} ${customModuleEntryPath}`
  )

  const suffix = ['umd.js', 'umd.min.js', 'common.js', 'css']
  suffix.forEach((item => {
    shell.mv(path.resolve(process.cwd(), `${outputName}/${apaasModuleConfig.outputName}.${item}`), path.resolve(process.cwd(), `${outputName}/index.${item}`))
  }))
  // shell.cp('-R', customModuleConfigPath, `${outputPath}/`)

  const newOutputConfig = { ...apaasModuleConfig }

  envDefine.forEach((_) => {
    delete newOutputConfig[_]
  })

  const outputPath = path.resolve(process.cwd(), outputName)

  // 拷贝public文件到指定目录
  apaasModuleConfig.copyAssets.forEach((copyAsset) => {
    copyAssetSource = copyAsset + copyAsset.endsWith('/') ? moduleType : '/' + moduleType
    const assetPath = path.resolve(process.cwd(), copyAssetSource)
    if (fs.existsSync(assetPath)) {
      const outputAsset = path.resolve(outputPath, copyAsset.replace('public/', 'static/'))
      shell.mkdir('-p', outputAsset)
      shell.cp('-R', `${assetPath}/*`, `${outputAsset}/`)
    }
  })
}

/**
 * @params outputPath 目标文件夹命
 * @params originJson 源配置信息
 */
const writeApaasJson = function (outputPath, originJson) {
  const newOutputConfig = { ...originJson }
  delete newOutputConfig.type
  delete newOutputConfig.outputName
  delete newOutputConfig.local
  newOutputConfig.extraConfig = { ...newOutputConfig.extraConfig }
  envDefine.forEach(item => {
    if (newOutputConfig[item]) {
      newOutputConfig.extraConfig[item] = true
      delete newOutputConfig[item]
      newOutputConfig.extraConfig[item + 'Css'] = fs.existsSync(path.resolve(process.cwd(), outputPath, item, 'index.css'))
    }
  })
  fs.writeFile(`${outputPath}/apaas.json`, JSON.stringify(newOutputConfig, null, '  '), function (
    error
  ) {
    if (error) {
      console.log(`配置信息写入失败\n${error}`['red'])
    }
  })
}

/**
 * @params originPath 源文件夹名
 * @params outputName 目标文件名
 */
const zip = function (originName, outputName) {
  const originPath = path.resolve(process.cwd(), originName)
  const outputZipPath = path.resolve(process.cwd(), `${outputName}.zip`)
  if (fs.existsSync(outputZipPath)) {
    shell.rm(outputZipPath)
  }
  // 生成zip并压缩
  zipper.zip(originPath, function (error, zipped) {
    if (!error) {
      zipped.compress() // compress before exporting

      var buff = zipped.memory() // get the zipped file as a Buffer

      zipped.save(outputZipPath, function (error) {
        if (!error) {
          console.log(`zipped successfully !`['green'])

          // 删除指定生成目录
          // shell.rm('-r',originPath)
        } else {
          console.log(`write error: ${error}`['red'])
        }
      })
    } else {
      console.log(`read error: ${error}`['red'])
    }
  })
}

const argv = process.argv.splice(2, 1)[0]
if (!argv) {
  console.log(`未指定插件名`['red'])
  process.exit(0)
}
const crypto = process.argv.splice(2, 1)[0]
const noZip = process.argv.splice(2, 1)[0]

module.exports = lib(
  {
    custom: `apaas-custom-plugin-${argv}`,
    crypto,
    noZip,
  },
  {}
)
