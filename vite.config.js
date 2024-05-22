import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import babel from 'vite-plugin-babel';

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://vitejs.dev/config/
// 在 defineConfig 函數中，可以傳入一個函數，該函數接收三個參數：command、mode 和 ssrBuild。 這些參數的意義如下：
// command: 目前執行的指令，可能的取值為 "build"、"serve" 或 "ssr"。 分別代表建置、開發伺服器和伺服器端渲染。
// mode: 目前的模式，可能的取值為 "development" 或 "production"。 分別代表開發模式和生產模式。
// ssrBuild: 是否是伺服器端渲染（SSR）的建置。 如果是 SSR 構建，則值為 true；否則為 false。
export default defineConfig((command, mode, ssrBuild) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      babel(),
    ],
    base: "./",
    resolve: {
      alias: {
        '@': [path.resolve(__dirname, './src')] //設置路徑代表的東西
      }
    },
    css: { // 
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "@/styles/main.scss";`, // 将你的全局样式文件引入到每个组件
        },
      },
    },
    envDir: path.resolve(__dirname, "./env"),
    server: {
      port: 3000 // 将端口设置为 3000
    },

    build: {
      rollupOptions: {
        output: {
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : '';
            // substr 是被淘汰語法，因此要改 slice
            return (
              driveLetter +
              name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
            );
          },
        },
      },
    },



  }
})