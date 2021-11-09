const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'index.html'
})
module.exports = {
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),//打包文件的入口
    output:{
        path:path.join(__dirname,'./dist'),//输出文件的存放路径
        filename:'bundle.js'//输出文件的名称
    },
    devServer:{
        static: path.join(__dirname,''),
        open:true
    },
    plugins:[htmlPlugin]
}