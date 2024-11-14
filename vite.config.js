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
    base: "./",
    resolve: {
      alias: {
        "@": [path.resolve(__dirname, "./src")], //設置路徑代表的東西
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
    envDir: path.resolve(__dirname, "./env"),
    server: {
      port: 3000, // 将端口设置为 3000
    },

    build: {
      rollupOptions: {
        output: {
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
    //   sourcemap: false,
    //   minify: "terser", // 選用哪種壓縮工具，常見的有 Terser(適合新專案) / UglifyJS(適合老專案，不支援ES6+)
    //   terserOptions: {
    //     compress: { // 壓縮選項
    //       drop_console: true, // 刪除console語句
    //       drop_debugger: true, // 刪除debugger語句
    //     },
    //     format: {
    //       comments: false, // 壓縮後不保留註釋
    //     },
    //   },
    //   cssCodeSplit: true,
    //   rollupOptions: {
    //     treeshake: true,
    //     output: {
    //       entryFileNames: "assets/js/entry-[hash].js",
    //       chunkFileNames: "assets/js/[name]-[hash].js",
    //       assetFileNames: (chunkInfo) => {
    //         if (chunkInfo.name === "index.css") {
    //           return "assets/[ext]/entry-[hash].[ext]";
    //         }
    //         return "assets/[ext]/[name]-[hash].[ext]";
    //       },
    //       manualChunks(id) {
    //         if (id.includes("node_modules")) {
    //           return "vendor";
    //         }
    //       },
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
