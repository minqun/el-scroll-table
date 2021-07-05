const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: {
    app: ['./table/index.js']
  },
  output: {
    path: path.resolve(process.cwd(), './dist'),
    publicPath: '/dist/',
    filename: 'index.js',
    libraryTarget: 'umd',

    library: 'index',
    umdNamedDefine: true,
    // globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  externals: {
    // vue: config.vue
  },
  // performance: {
  //   hints: false
  // },
  // stats: {
  //   children: false
  // },
  module: {
    rules: [

      {
        test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 50000,   //小于50K的 都打包
              name: "[hash:8].[name].[ext]",
              publicPath: "img/",	//替换CSS引用的图片路径 可以替换成爱拍云上的路径
              outputPath: "../img/"		//生成之后存放的路径
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            // Interprets CSS
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader' // 将 Sass 编译成 CSS
          }
        ]
      },
      {
        test: /\.js$/,
        include: process.cwd(),
        // exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin()

  ]
};
