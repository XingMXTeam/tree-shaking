import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';
import path from 'path';

const devConfig = {
    mode: 'development',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'bundle.dev.js',
        library: 'MyLibrary', // 替换为你的库名
        libraryTarget: 'umd',
        globalObject: 'this', // 兼容Node.js和浏览器
    },
    devServer: {
        static: './dist',
        hot: true,
    },
};

export default merge(commonConfig, devConfig);