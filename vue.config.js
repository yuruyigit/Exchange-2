const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

// console.log("process.env.NODE_ENV:" + process.env.NODE_ENV);
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
const resolve = dir => path.resolve(__dirname, dir);
const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
module.exports = {
    publicPath: "./", // 默认'/'，部署应用包时的基本 URL
    outputDir: "dist", // 'dist', 生产环境构建文件的目录
    // CSS 相关选项
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
        extract: true,

        // 是否开启 CSS source map？
        sourceMap: false,

        // 为预处理器的 loader 传递自定义选项。比如传递给
        // sass-loader 时，使用 `{ sass: { ... } }`。
        loaderOptions: {
            less: {
                modifyVars: {
                    red: "#03a9f4",
                    blue: "#3eaf7c",
                    orange: "#ff0000",
                }
            },
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 50,
                        propList: ["*"],
                        // 该项仅在使用 Circle 组件时需要
                        // 原因参见 https://github.com/youzan/vant/issues/1948
                        selectorBlackList: ["van-circle__layer"]
                    })
                ]
            }
        },
        // 这个选项不会影响 `*.vue` 文件。
        modules: false
    },

    // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
    // 在多核机器下会默认开启。
    parallel: require("os").cpus().length > 1,

    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("Images", resolve("src/assets/Images"))
            .set("common", resolve("src/common"))
            .set("components", resolve("src/components"))
            .set("lang", resolve("src/lang"))
            .set("views", resolve("src/views"));
    },
    configureWebpack: config => {
        if (IS_PROD) {
            const plugins = [];
            plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: true,
                            drop_console: true,
                            drop_debugger: true,
                            pure_funcs: ["console.log"] //移除console
                        },
                        mangle: false,
                        output: {
                            beautify: true //压缩注释
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            );
            //去掉 console.log
            plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: true,
                            drop_console: true,
                            drop_debugger: true,
                            pure_funcs: ["console.log"] //移除console
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            );
            config.plugins = [...config.plugins, ...plugins];
        }
    }
};
