const path = require("path");
module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/main.ts",

    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: "ts-loader"
            }
        ]
    },
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist/js`,
        //ブラウザからバンドルにアクセスする際のパス
        publicPath: "/js/", 
        // 出力ファイル名
        filename: "index.js"
    },
    resolve: {
        // import 文で .ts ファイルを解決するため
        extensions: [".ts",".js"]
    },
    //sourcemapを有効に
    devtool: "source-map",
    //webpack-dev-server用設定
    devServer: {
        open: true,//ブラウザを自動で開く
        openPage: "index.html",//自動で指定したページを開く
        contentBase: path.join(__dirname, "dist"),// HTML等コンテンツのルートディレクトリ
        watchContentBase: true,//コンテンツの変更監視をする
        port: 8080, // ポート番号
    }

};