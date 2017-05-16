var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  //
  entry: './app/index.js',
 
 
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
 
  devServer: {
     publicPath: "/",
     contentBase: "./dist"
 },
 
 module: {
 
   rules:[
       { 
         /* Use babel to transpile jsx to  */
         test: /\.(js)$/,
         exclude:[
           path.resolve(__dirname, "node_modules")
         ],
         loader: 'babel-loader',
         options: {
            presets: ["es2015","react"]
          }
       },
       {
         test: /\.css$/, use:['style-loader','css-loader']
       }
   ]
 },
 
 plugins: [new HtmlWebpackPlugin({
      template: 'app/index.html'
 })]
}

