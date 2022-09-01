/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-26 22:10:14
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-01 23:07:05
 * @FilePath: \react\config-overrides.js
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
const path = require('path');
const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addDecoratorsLegacy,
    addWebpackPlugin
} = require('customize-cra');
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const isEnvProduction = process.env.NODE_ENV === 'production'
// 进度条
const addCompression = (config) => {
    if (isEnvProduction) {
        new CompressionWebpackPlugin({
            test: /\.(css|js)$/,
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            threshold: 10240, // 只处理文件大于10kb的资源
            minRatio: 0.80, // 只处理压缩率低于90%的文件
        })
    };
    return config;
}

const addAnalyzer = () => (config) => {
    if (process.env.ANALYZER) {
        config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config;
}
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@config': path.resolve(__dirname, './src/config'),
    }),
    addDecoratorsLegacy(),
    addAnalyzer(),
    addCompression(),
    addWebpackPlugin(new ProgressBarPlugin()) // 中终端显示进度条
);