const path = require('path')
module.exports = {
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),//打包文件的入口
    output:{
        path:path.join(__dirname,'./dist'),//输出文件的存放路径
        publicPath: '/dist',
        filename:'bundle.js'//输出文件的名称
    },
    devServer:{
        static: './',
        open:true
    }
}