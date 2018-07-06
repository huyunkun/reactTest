const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js', //入口文件
    output: {
        path: path.resolve(__dirname, 'build'), //打包文件的输出路径
        filename: 'builde.js',
        publicPath:'/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        publicPath:'/',
        inline : true,
        hot:true
    },
    module: {
        rules: [ //配置加载器
            {
                test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
                loader: 'babel-loader', //使用的加载器名称
                query: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
                    presets: ['env', 'react'],
                    plugins: ["react-hot-loader/babel"] //增加
                }
            },
            {
                test: /\.css/,//配置处理css文件
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, 
                loader: 'url-loader?limit=100000',
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', //制定模板路径
            filename: 'index.html' //指定文件名
        }),
    ]

}