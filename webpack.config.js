module.exports = {
  entry: './client/index.js',
  mode: 'development', //make sure to change to production when moving forward
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      }
    ]
  }
}
