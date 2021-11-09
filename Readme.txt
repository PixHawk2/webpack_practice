webpack配置流程：
一、安装和配置
  1.安装webpack：
    npm install webpack webpack-cli -D
  2.新建webpack.config.js，初始化配置文件：
  module.exports = {
      mode:'development'
  }
  3.在pack.json的script节点下，新增dev
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "dev":"webpack"
    }
    
  4.运行npm run dev即可以打包

二、配置打包的入口和出口
  1.在webpack.config.js中新增如下配置信息：
    const path = require('path')
    module.exports = {
        entry:path.join(__dirname,'./src/index.js'),//打包文件的入口
        output:{
            path:path.join(__dirname,'./dist'),//输出文件的存放路径
            filename:'bundle.js'//输出文件的名称
    }
      }
    }
