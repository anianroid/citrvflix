const path = require('path');

module.exports = {
	context: __dirname, // run this from anywhere and it runs it form the root directory (__dirname is a ndoe global variable that refers to the root of your project)
	entry: './js/ClientApp.jsx',
	devtool: 'cheap-eval-source-map', // when an error is pointed out, it shows the actual source where it has gone wrong than in the bundled code (there are more different kinds of source maps like this : eg. full source map)
	output: {
		path: path.join(__dirname, 'public'), // path is a node module that just resolves UNIX style relative paths
		filename: 'bundle.js'
	},
	devServer: {
		publicPath: '/public/',
		historyApiFallback: true // let the client worry about the routing (if the dev server doesnt recogonizes anything it just sends it down to the client) || actually patched for development : a dev trick
	},
	resolve: {
		extensions: ['.js', '.jsx', 'json'] // anything that's required, it attaches these extentions with the order of resolution and fails if none of them is found
	},
	stats: {
		// config (formatting) for how the message reported back
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		rules: [
			{
				enforce: 'pre', // ensuring that this runs before babel we do not care if post compilation code passes lint, we want it to pass before that though
				test: /\.jsx?$/,
				loader: 'eslint-loader', // eslint-loader : run eslint on all the files that goes through the build pipeline (runs on files that changed and not on every file every single time)
				exclude: /node_modules/ // exclude whatever!
			},
			{
				test: /\.jsx?$/, // extension for the files must be .js and possibly x (jsx) : ? for it might be there : $ it must be at the end of the filename
				loader: 'babel-loader' // if the above condition is met, call this mentioned loader it can even be : laders: [] and array of loaders can be passed
			}
		]
	}
};
