const webpack = require('webpack');
const { spawn } = require('child_process');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const defaultInclude = path.resolve(__dirname, 'src')

module.exports = {
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            include: defaultInclude
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            include: defaultInclude
          }
        ]
      },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    target: 'electron-renderer',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],

    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),

      before() {
        spawn(
          'electron',
          ['./electron.js'],
          { shell: true, env: process.env, stdio: 'inherit' }
        )
        .on('close', code => process.exit(0))
        .on('error', spawnError => console.error(spawnError));
      }
    }
}