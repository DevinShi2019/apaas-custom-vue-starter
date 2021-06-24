const program = require('commander');
const shelljs = require('shelljs');
const package = require('../../package.json');
const userHome = require('user-home');
const fs = require('fs')
const path = require('path')
const colors = require('colors');

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

shelljs.exec(`git clone https://github.com/DevinShiDas/apaas-custom-vue-starter.git#${version} ${gitTemplateRepo}`);

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

const customModuleFileNames = fs.readdirSync(demoCustomModulePath)

customModuleFileNames.forEach(fileName => {
  const filePath = path.join(demoCustomModulePath, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  fileContent.replace('{{moduleName}}', moduleName)
  fileContent.replace('{{ModuleName}}', moduleName.charAt(0).toUpperCase() + moduleName.slice(1))
  fs.writeFileSync(filePath, fileContent)
})

fs.renameSync(demoCustomModulePath, path.resolve(customPath, `apaas-custom-${moduleName}`))
fs.renameSync(path.resolve(staticPath, `apaas-custom-${demoCustomModulePath}`), path.resolve(customPath, `apaas-custom-${moduleName}`))

