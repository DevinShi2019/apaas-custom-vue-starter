const shell = require('shelljs')
const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')

const customs = fs.readdirSync(path.resolve(process.cwd(), 'src/custom'))
const all = customs.reduce((result, dir) => {
  // ignore directories whose name starts without `apaas-custom-plugin-`
  if (dir.indexOf('apaas-custom-plugin-')) return result
  try {
    const apaasJson = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'src', 'custom', dir, 'apaas.json')))
    // match every plugins except those whose local.notAll is true
    if (apaasJson && (!apaasJson.local || !apaasJson.local.notAll)) result.push(dir.slice(20))
  } catch (e) {
  } finally {
    return result
  }
}, [])

const help = `
插件打包入口

格式：
1. node thisJs xx <params> <value> 用指定的参数和值打包xx插件
2. node thisJs xx 打包xx插件
3. node thisJs <params> <value> 用指定的参数和值打包xx插件，notes: 必须要包含 -i 或者 -a 参数

参数：
-i <plugin_name> 指定插件名，优先级高于格式1和格式2指定的插件名
-b 采用批量打包模式，批量打包默认的插件为上文中的 all 变量值指定的插件集合，此参数将忽略 -i 指定的具体插件名
    批量打包默认的插件: ${all.join(',')}
-c 加密命名，插件打包后的文件夹或压缩文件使用 md5 加密插件 code 后的字符串命名
-Z 取消压缩。默认会给每一个插件打包，使用此命令则取消打包这一步
-A <plugins_str> 声明参与批量打包的所有插件，用英文逗号分隔多个插件，如 oo,aa 表示打包oo和aa这两个插件，需要 -b 参数才会实际生效
-a 使用异步打包模式
-h, --help 查看打包命令帮助
--clean, --rm 清除所有打包产生的文件

支持缩略形式的参数，如 -cZ 相当于 -c -Z，其后需要跟变量的参数，写在省略形式前的会读取其后的变量值并生效
如 -iA oo 表示指定打包oo插件；-Ai oo,aa表示指定需要批量打包的插件为 oo 和 aa
`

let crypto = 'noc'
let noZip = 'noz'
let batchMode = false
let plugin = ''
let async = false

const pickValue = function(a, i) {
  return a && a[i] && !a[i].startsWith('-') && a[i]
}

const parseArgv = function(argv) {
  const localArgv = [...argv]
  for (let i = 0; i < localArgv.length; i++) {
    if (localArgv[i].startsWith('--')) {
      switch (localArgv[i]) {
        case '--clean':
        case '--rm':
          rimraf(path.resolve(process.cwd(), 'crypto'))
          rimraf(path.resolve(process.cwd(), 'PLUGIN_*'))
          rimraf(path.resolve(process.cwd(), 'PLUGIN_*.zip'))
          process.exit(0)
        case '--help':
          console.log(help)
          process.exit(0)
        default:
          break
      }
    } else if (localArgv[i].startsWith('-')) {
      const flag = localArgv[i].slice(0)
      const flags = (flag && flag.split('')) || []
      flags.forEach((f) => {
        let a
        switch (f) {
          case 'c':
            crypto = '-c'
            break
          case 'b':
            batchMode = true
            break
          case 'a':
            async = true
            break
          case 'A':
            ;(a = pickValue(localArgv, i + 1)) && a && ((all = a.split(',')), i++)
            break
          case 'Z':
            noZip = '-Z'
            break
          case 'i':
            ;(a = pickValue(localArgv, i + 1)) && a && ((plugin = a), i++)
            break
          case 'h':
            console.log(help)
            process.exit(0)
          default:
            break
        }
      })
    }
  }
  if (!batchMode && !plugin) {
    val = process.argv.slice(2, 3)[0]
    val && !val.startsWith('-') && (plugin = val)
    if (!plugin) {
      console.error('未指定插件名')
      process.exit(0)
    }
  }
}

parseArgv(process.argv.slice(2))

const scriptPath = path.resolve(process.cwd(), 'build/build-plugins.js')

const doBuild = (item) => {
  shell.exec(`node ${scriptPath} ${item} ${crypto} ${noZip}`, { async: async })
}

if (batchMode) {
  all.forEach(doBuild)
} else {
  doBuild(plugin)
}
