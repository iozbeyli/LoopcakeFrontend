const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
const loaders = [
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'stage-0', 'react']
        }
    },
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            use: ['css-loader', 'less-loader']
        })
    },
    {
        test: /\.css$/,
        loader: "style-loader!css-loader"
    },
    {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
    },
    {
        test: /\.jpe?g$|\.gif$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file-loader?name=[name].[ext]?[hash]'
    },
    {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
    }
];

const plugins = [
    new ExtractTextPlugin({
        filename: 'semantic.min.css',
    })
];

const resolve = {
    alias: {
        '../../theme.config$': path.join(__dirname, 'loopcake-semantic-theme/theme.config')
    }
};



const client = {
    entry: './src/client.js',
    output: {
        path: path.resolve('./dist/public'),
        filename: 'bundle.js'
    },
    module: {loaders},
    plugins: plugins,
    resolve: resolve,
};

const server = {
    entry: './src/server.js',
    output: {
        path: path.resolve('./dist'),
        filename: 'server.js'
    },
    module: {loaders},
    plugins: plugins,
    resolve: resolve,
    target: 'node',
    externals: [nodeExternals()]
};

module.exports = [client,server];
