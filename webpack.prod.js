import { merge } from 'webpack-merge';
import path from 'path';
import commonConfig from './webpack.common.js';

const prodConfig = {
    mode: 'production',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'bundle.prod.js',
        library: 'MyLibrary', // 替换为你的库名
        libraryTarget: 'umd',
        globalObject: 'this', // 兼容Node.js和浏览器
    },
};

export default merge(commonConfig, prodConfig);