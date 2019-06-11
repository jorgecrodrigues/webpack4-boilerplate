const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        // Limpa o diretório de saída ...
        // new CleanWebpackPlugin(),
        // Configuração de template para a página inicial ...
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        // Configuração para geração de favicon ...
        new FaviconWebpackPlugin({
            logo: './src/assets/favicon/car.png',
            title: 'Webpack App',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        })
    ]
}