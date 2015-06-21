module.exports = {
	cache: true,
 	context: __dirname + "/src.js",
  	entry: "./index.js",
	output: {
	 	filename: "bundle.js",
	  	path: __dirname + "/dist",
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: /src.js/,
				loader: 'babel-loader',
				query: {modules: 'common'}
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.tag$/,
				include: /src.js/,
				loader: 'tag',
				query: {compact: 'true'}
			}
		]
	}
}