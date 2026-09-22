# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


package.json
    "build": "node --max_old_space_size=8192 node_modules/vite/bin/vite.js build",


viteConfig
    build: {
      outDir: 'dist/divination',
      sourcemap: false,
      minify: 'esbuild',
      esbuild: {
        drop: ['console', 'debugger'],
      },
      cssCodeSplit: true,