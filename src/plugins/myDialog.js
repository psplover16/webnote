import MyDialogTest from "@/components/MyDialogTest.vue";
import { createVNode, render } from "vue";

export default {
  install: (app) => {
    let confirmInstance = null; // 儲存元件的實例

    function createConfirmDialog() {
      if (!confirmInstance) {
        let container = null;

        container = document.createElement("div");
        let vnode = createVNode(MyDialogTest); // 用createVNode(創建虛擬節點)方法， 引入 MyDialogTest 然後創建一個 虛擬節點
        document.body.appendChild(container);

        render(vnode, container); // 將虛擬節點渲染到容器中

        confirmInstance = vnode.component; // 將創建的組件實例賦值給 confirmInstance
      }

      return confirmInstance;
    }
    //
    const instance = createConfirmDialog();
    // 將 $confirm 添加成全局屬性
    app.config.globalProperties.$confirm = {
      // 當調用 $confirm.open(options) 會執行內部內容
      async open(options) {
        console.log(instance);
        return await instance?.exposed?.open(options);
      },
      async close() {
        return await instance?.exposed?.close();
      },
    };
  },
};
