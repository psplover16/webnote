import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import "./style/index.css"; //在此引入TailwindCss

const app = createApp(App);
app.use(router);
app.mount("#app");
