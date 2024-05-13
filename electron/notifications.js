import { Notification } from 'electron';

const notifications_title = "WebNote的title";
const notifications_body = "網頁筆記的body";
// const notifications_clickMSG = "網頁筆記的clickMSG";


// 渲染進程用法
// new Notification(notifications_title, { body: notifications_body }).onclick = () => {
//     console.log(notifications_clickMSG);
// }


export default function showNotification() {
    new Notification({title:notifications_title, body: notifications_body }).show();
}

