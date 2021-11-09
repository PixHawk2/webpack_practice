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

三、配置自动打包功能：
  1.安装支持的工具：npm install webpack-dev-server -D
  2.修改package.json-->scripts中的dev修改为：
  ·"dev": "webpack-dev-server"
  3.将src---->index.html文件中，script脚本的引用路径，修改为'/bundle.js'
  4.npm run dev
  5.浏览器中访问对应的地址，查看打包结果
  注：上述步骤，因为webpack版本变化后，配置项更改步骤1、2正确，步骤3不改变原先的脚本引用路径，还需要在webpack.config.js中增加如下：
   devServer:{
        static: './',
        open:true
  }
