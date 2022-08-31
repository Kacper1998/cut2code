module.exports = {
    entry: "./index.js",
    output: {
        filename: "out.js"
    },
    watch: true
    {
    }
        test: /\.(png|gif|svg|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader', // images loader 
            options: {
              name: '[name].[ext]', // this will keep the original name and extension
            } 
          },
          {
            loader: 'image-webpack-loader', // image compression => contains loaders for different types of images
            options: {
              gifsicle: { // gif loader
                interlanced: false
              },
              optipng: { // png loader
                optimizationLevel: 7
              },
              pngquant: { // png loader
                quality: '65-90',
                speed: 4
              },
              mozjpeg: { // jpg loader
                progressive: true,
                quality: 65
              }
            }
          }
        ]
      }
