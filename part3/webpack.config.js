// 引入一个包
const path = require('path');
// webpack配置 都写在module.exports里面
module.exports = {
    // 入口文件
    entry: './src/index.ts',

    // 指定打包文件所在的目录
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包后的文件存放的目录
        filename: 'bundle.js' // 打包后的文件名
    },

    module: {
        rules: [{
            // 匹配文件后缀名
            test: /\.ts$/,
            // 要使用的loader
            use: 'ts-loader',
            // 要排除的文件
            exclude: /node_modules/
        }]
    }

}