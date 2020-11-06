const path = require('path')
const pluginConfig = require('./plugins.config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const entryPath = path.resolve(__dirname, '../entry')

module.exports = {
	entry: {
		'babel-polyfill': 'babel-polyfill',
		index: path.resolve(entryPath, 'index'),
		main: path.resolve(entryPath, 'main'),
		pageA: path.resolve(entryPath, 'page-a'),
		pageB: path.resolve(entryPath, 'page-b')
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js', //内部为正则表达式
			'@': path.resolve(__dirname, '../')
		}
	},
	devServer: {
		contentBase: path.resolve(__dirname, "../dist"),
		compress: false,
		index: 'index.html',
		port: 8080,
		proxy: [{
			context: ['/xl'],
			target: 'http://47.92.202.179:81',
			changeOrigin: true,
			pathRewrite: {'/xl': ''}
		}]
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
			},
			{
				test:/\.(scss|css)/i,
				use:['style-loader','css-loader','sass-loader']
			},
			{
				test:/\.(jpg|png|jpeg|svg)$/i,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader']
			}
		]
	},

	plugins: [
		...pluginConfig.createHtmlPlugin({
			index: {
				chunks: ['index']
			},
			main: {
				chunks: ['main']
			},
			'page-a': {
				chunks: ['pageA']
			},
			'page-b': {
				chunks: ['pageB']
			}
		}),

		new VueLoaderPlugin()
	]
};