import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// import { fileURLToPath, URL } from "node:url";
import babel from "vite-plugin-babel";
import { visualizer } from 'rollup-plugin-visualizer';
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
// 在 defineConfig 函數中，可以傳入一個函數，該函數接收三個參數：command、mode 和 ssrBuild。 這些參數的意義如下：
// command: 目前執行的指令，可能的取值為 "build"、"serve" 或 "ssr"。 分別代表建置、開發伺服器和伺服器端渲染。
// mode: 目前的模式，可能的取值為 "development" 或 "production"。 分別代表開發模式和生產模式。
// ssrBuild: 是否是伺服器端渲染（SSR）的建置。 如果是 SSR 構建，則值為 true；否則為 false。
export default defineConfig((command, mode, ssrBuild) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(), 
      babel(),
      visualizer({
        open: true,
        filename: "./dist/stats.html",
        gzipSize: true, // 收集 gzip大小，並顯示
        brotliSize: true, // 收集 brotli 大小，並顯示
      }),
      ViteImageOptimizer({ // 壓縮圖片
        jpg: { quality: 100 },
      }),
    ],
    base: "./", // 設定基本URL路徑，若設置為 /myapp，則所有靜態資源將會從/myapp/ 去尋找資源
    resolve: {
      alias: {
        // path.resolve([from ...], to) // nodeJs的路徑拼接函數，把from陣列裡面的參數全部拼接，最後在與to變數拼接成絕對路徑
        // __dirname 是nodeJs的全局變數，代表當前模塊(JS文件)的目錄路徑
        "@": [path.resolve(__dirname, "./src")], // 設置路徑代表的東西
      },
    },
    css: {
      //
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "@/styles/main.scss";`, // 将你的全局样式文件引入到每个组件
        },
      },
    },
    envDir: path.resolve(__dirname, "./env"), // 指定env所在的位置(默認為跟目錄)，在vue文件中 使用 import.meta.env.VITE_API_AXIOS_BASE_URL 的方式引用
    server: {
      port: 3000, // 将端口设置为 3000
    },

    build: {
      rollupOptions: {
        output: { // 優化打包輸出
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            // eslint-disable-next-line no-control-regex
            const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g; // 檢測特殊字元及 ASCII碼0~31及127的控制字元，g表示對全部字元搜索，若不加g，則只會找到第一個匹配結果
            const DRIVE_LETTER_REGEX = /^[a-z]:/i; // 檢查是否  英文字母:  這種格式開頭(^ 表示只匹配開頭)，該英文字母不分大小寫 (因為i結尾(表示不分大小寫))
            //
            const match = DRIVE_LETTER_REGEX.exec(name); // 正則的exec 檢查匹配結果
            const driveLetter = match ? match[0] : ""; // 檔案名稱不以 驅動器字母為開頭，則 driveLetter 設定為空字串
            // substr 是被淘汰語法，因此要改 slice
            return (
              // 將name刪掉 驅動子母開頭，只留檔案名稱本身
              // 將上述處理得到的 檔案名稱本身，將不合法字元全部取代掉，取代成空字串
              // 最後再將檔案名稱重組
              driveLetter +
              name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
            );
          },
          // 
          // dir: 'dist',  // 输出到 dist 文件夹
          format: 'es', // 指定输出文件格式，使用 ES 模塊格式 (esm)  
          // esm（默认）：ES模块，适用于现代浏览器和前端工具。
          // cjs: CommonJS模块，适用于 Node.js 环境。
          // umd: 适用于浏览器的通用模块定义，可以在浏览器和 Node.js 中使用。
          // iife: 立即执行的函数表达式，适用于浏览器，通常用于单一文件的包。

          // // 自定義輸出文件名稱
          // entryFileNames: 'assets/[name].[hash].js',  
          // chunkFileNames: 'chunks/[name].[hash].js',
          // assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },
    },
    // 
    // resolve: {
    //   alias: {
    //     "@": fileURLToPath(new URL("./src", import.meta.url)),
    //   },
    // },
    // 
    // build: {
    //   sourcemap: false, // Source map 是一種映射文件，可以將最終的壓縮後代碼映射回源代碼，便於調試。
    //   minify: "terser", // 選用哪種壓縮工具，常見的有 Terser(適合新專案) / UglifyJS(適合老專案，不支援ES6+)
    //   terserOptions: { // terser 配置的具體選項
    //     compress: { // 壓縮選項
    //       drop_console: true, // 刪除console語句
    //       drop_debugger: true, // 刪除debugger語句
    //     },
    //     format: {
    //       comments: false, // 壓縮後不保留註釋
    //     },
    //   },
    //   cssCodeSplit: true, // 啟用css代碼分割
    //   rollupOptions: { // Vite 使用 Rollup 進行打包 (Vue2是webPack)，能使用該配置改變Rollup選項。
    //     input: '/src/custom-entry.js'  // 指定自定义入口文件
    //     treeshake: true, // 樹搖，移除未使用的code
    //     output: {
    //       entryFileNames: "assets/js/entry-[hash].js", // 設置入口文件(從該文件開始加載)的命名，[hash]表示哈希值
    //       chunkFileNames: "assets/js/[name]-[hash].js", // 設置 異步代碼文件的命名，chunk表示打包工具分割出的模塊
    //       assetFileNames: (chunkInfo) => { // 靜態文件的命名
    //         if (chunkInfo.name === "index.css") {
    //           return "assets/[ext]/entry-[hash].[ext]"; // [ext] 是文件的副檔名
    //         }
    //         return "assets/[ext]/[name]-[hash].[ext]";
    //       },
          // manualChunks(id) { // 手動分割代碼，id表示模塊的路徑字符串
          //   if (id.includes("node_modules")) { // 
          //     return "vendor";
          //   }
          // },
    //     },
    //   },
    // },
    // 
    // server: {
    //   proxy: {
    //     "/api": {
    //       target: "https://development-executeapi.cmoney.tw",
    //       changeOrigin: true,
    //       // rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //   },
    // },
  };
});
