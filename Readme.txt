webpack配置流程：

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


