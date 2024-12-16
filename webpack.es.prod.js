import { merge } from 'webpack-merge';
import path from 'path';
import commonConfig from './webpack.common.js';
import TerserPlugin from 'terser-webpack-plugin';

const prodConfig = {
    mode: 'production',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        // filename: 'bundle.prod.js',
        // library: 'MyLibrary', // 替换为你的库名
        libraryTarget: 'module',
        globalObject: 'this', // 兼容Node.js和浏览器
    },
    experiments: {
      outputModule: true,
    },
    optimization: {
        minimize: true, // 启用压缩
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    // drop_console: true, // 删除console.log
                },
            },
        })],
    },
};

export default merge(commonConfig, prodConfig);
