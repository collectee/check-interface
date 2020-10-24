const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

const createHtmlPlugin = function (config) {
	const keys = Object.keys(config)
	return keys.map(k => {
		return new HtmlWebpackPlugin({
			inject: true,
			chunks: config[k].chunks,
			template: path.resolve(__dirname, `../entry/${k}/index.html`),
			title: k,
			filename: `${k}.html`
		})
	})
}

module.exports.createHtmlPlugin = createHtmlPlugin