const program = require('commander');
const shelljs = require('shelljs');
const userHome = require('user-home');
const fs = require('fs')
const path = require('path')
const colors = require('colors');

const init = (cmd, program) => {

  const moduleName = cmd.moduleName

  const projectPath = path.resolve(`${process.cwd()}`, `apaas-custom-${moduleName}`)
  const customPath = path.resolve(projectPath, 'src/custom');
  const staticPath = path.resolve(projectPath, 'public/custom');

  //检查控制台是否以运行`git `开头的命令
  if (!shelljs.which('git')) {
    //在控制台输出内容
    console.log('error 本机上没有git，请检查git是否安装或相关环境变量是否正确'['red']);
    shelljs.exit(1);
  }

  const version = 'v0.0.1'

  const gitTemplateRepo = `${userHome}/.apaasCliRepo`

  shelljs.rm('-rf', gitTemplateRepo)

  shelljs.mkdir('-p', gitTemplateRepo)


  shelljs.exec(`git clone --branch ${version} https://gitee.com/shiyutian/apaas-custom-vue-starter.git --depth=1 ${gitTemplateRepo}`);

  shelljs.rm('-rf', path.resolve(`${gitTemplateRepo}`, '.git'))

  if (fs.existsSync(projectPath)) {
    // 当前路径已经在相关工程
    console.log('error 当前路径已经存在工程，请检查相关目录设置'['red'])
    shelljs.exit(1);
  } else {
    shelljs.mkdir('-p', `${process.cwd()}`)
  }

  shelljs.cp('-R', `${gitTemplateRepo}/.`, projectPath)

  const demoCustomModuleName = 'hello'
  const demoCustomModulePath = path.resolve(customPath, `apaas-custom-${demoCustomModuleName}`)

  const writeAndReplaceFileSync = (filePath) => {
    const stat = fs.lstatSync(filePath)
    if (stat.isDirectory()) {
      const customModuleFileNames = fs.readdirSync(filePath)
      customModuleFileNames.forEach(fileName => {
        const tempFilePath = path.join(filePath, fileName)
        writeAndReplaceFileSync(tempFilePath)
      })
    } else {
      let fileContent = fs.readFileSync(filePath, 'utf-8')
      fileContent = fileContent.replace(/{{moduleName}}/g, moduleName)
      fileContent = fileContent.replace(/{{ModuleName}}/g, moduleName.charAt(0).toUpperCase() + moduleName.slice(1))
      fs.writeFileSync(filePath, fileContent)
    }
  }

  writeAndReplaceFileSync(demoCustomModulePath)

  fs.renameSync(demoCustomModulePath, path.resolve(customPath, `apaas-custom-${moduleName}`))
  fs.renameSync(path.resolve(staticPath, `apaas-custom-${demoCustomModuleName}`), path.resolve(staticPath, `apaas-custom-${moduleName}`))

}


module.exports = init 

init({ moduleName : 'nice' }, program)