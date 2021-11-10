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
四、配置打包后自动跳转页面
  1.npm install html-webpack-plugin
  2.webpack.config.js中新增： 
  · const HtmlWebpackPlugin = require('html-webpack-plugin')
    const htmlPlugin = new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'index.html'
    })
  ·exports中新增：
  plugins:[htmlPlugin]

五、加载器的配置
(1)CSS文件的打包加载
  1.npm i style-loader css-loader -D
  2.在webpack.config.js中新增如下配置项：
   module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    }
(2)less文件的加载打包
  1.npm i less-loader less -D;
  2.rules中新增： {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
(3)scss文件的加载打包
  1.npm i sass-loader node-sass -D;
  2. rules中新增：{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}

六、postCSS的配置【添加CSS的兼容性前缀】
  1.npm i postcss-loader autoprefixer -D
  2.新建postcss.config.js，配置如下：
  const autoprefixer = require('autoprefixer')
  module.exports = {
      plugins:[autoprefixer]
  }
  3.webpack.config.js中css文件rules规则新增：
    {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']}
七、文件和url处理
  1.npm i url-loader file-loader -D
  2.新增rules规则：
    {test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,use:'url-loader?limit=3040'}[目前看本练习不需要]
八、高级JS语法处理
  1. npm i babel-loader @babel/core @babel/runtime -D
  2.babel语法插件相关的包:
  npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D
  3.babel.config,js
  module.exports = {
    presets:['@babel/preset-env'],
    plugins:['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
  }