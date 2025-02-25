import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./style/index.css"; //在此引入TailwindCss
import pinia from "./store/pinia";

import myDialog from "@/plugins/myDialog";

const app = createApp(App);
app.use(myDialog); // 引用插件
// 替
// pinia.use(({ store }) => {
//   store.$confirm = app.config.globalProperties.$confirm;
// });
app.use(pinia);
app.use(router);
app.mount("#app");
