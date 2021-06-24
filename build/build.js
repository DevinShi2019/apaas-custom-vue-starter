const shell = require('shelljs');
const fs = require('fs')
const path = require('path')
const zipper = require("zip-local");
const colors = require('colors');

const lib = async (cmd, program) => {
  const customModule = cmd.custom
  // 获取指定 custom 目录下的apaas.json
  const customModulePath = path.resolve(`${process.cwd()}`, 'src/custom', customModule)

  const customModuleConfigPath = path.resolve(customModulePath, 'apaas.json')
  if (!fs.existsSync(customModuleConfigPath)) {
    console.log(`Error: 自开发模块 ${customModule} 下不存在需要的 apass.json 文件`['red'])
    console.log(`exit`['red'])
    process.exit(0)
  }

  const apaasConfig = JSON.parse(fs.readFileSync(customModuleConfigPath))
  const customModuleEntryPath = path.resolve(customModulePath, apaasConfig.entry)

  if (!fs.existsSync(customModuleEntryPath)) {
    console.log(`Error: apaas.json 指定的entry: ${apaasConfig.entry} 的路径错误 `['red'])
    console.log(`error path is ${customModuleEntryPath}`['red'])
    console.log(`exit`['red'])
    process.exit(0)
  }

  const customCliPath = path.resolve(`${process.cwd()}`, './node_modules/.bin/vue-cli-service')

  const outputPath = path.resolve(`${process.cwd()}`, `${apaasConfig.outputName}`)
  const outputZipPath = path.resolve(`${process.cwd()}`, `${apaasConfig.outputName}.zip`)


  // 使用vue build 打包，并生成文件
  shell.exec(`node ${customCliPath} build --target lib --name ${apaasConfig.outputName} --dest ${apaasConfig.outputName} ${customModuleEntryPath}`)
  shell.cp('-R', customModuleConfigPath, `${outputPath}/`)

  // 拷贝public文件到指定目录
  apaasConfig.copyAssets.forEach(copyAsset => {
    const assetPath = path.resolve(`${process.cwd()}`, copyAsset)

    const outputAsset = path.resolve(outputPath, copyAsset.replace('public/', 'static/'))
    shell.mkdir('-p', outputAsset)    
    shell.cp('-R', `${assetPath}/*`, `${outputAsset}/`)
  });

  if (fs.existsSync(outputZipPath)) {
    shell.rm(outputZipPath)
  }
  // 生成zip并压缩
  zipper.zip(outputPath, function(error, zipped) {
    if(!error) {
        zipped.compress(); // compress before exporting
 
        var buff = zipped.memory(); // get the zipped file as a Buffer
 
        zipped.save(`${outputZipPath}`, function(error) {
            if(!error) {
                console.log("saved successfully !");

              // 删除指定生成目录
              // shell.rm('-r',outputPath)
            }
        });
      }
  })

}

module.exports = lib({
  custom: 'apaas-custom-{{moduleName}}'
}, {})