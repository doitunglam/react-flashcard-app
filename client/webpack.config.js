const path = require('path')

module.exports = env => {
  return {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js'
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          ]
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, ''),
          use: [
            'style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.jpg/,
          type: 'asset/resource'
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    watch: true
  }
}
