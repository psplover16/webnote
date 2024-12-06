export default class testClass {
    static staticParam = "靜態參數";
    params = "非靜態參數";

    // 構造函數，在類中使用，會在創建對象時自動調用，通常用於初始化屬性
    constructor(name) {
        console.log("建構了",name);
        this.name = name;
    }
    // 類方法，要配合new一起用
    sayHello() {
        console.log('this.staticParam:'+this.staticParam) // undefined
        console.log('testClass.staticParam:'+testClass.staticParam) // 靜態參數
        console.log('this.constructor.staticParam:'+this.constructor.staticParam) // 靜態參數
        // 
        console.log('this.params:'+this.params); // 非靜態參數
        console.log('testClass.params:'+testClass.params); // undefined
        // 
        console.log('this.name:'+this.name); // 創建的名稱
        console.log('testClass.name:'+testClass.name); // testClass
    }
    // 靜態方法，static，屬於類本身，而不屬於類實例，能通過類名直接調用，而無須創建實例
    static staticSayHello() {
        console.log('this.staticParam:'+this.staticParam) // 靜態參數 !!!
        console.log('testClass.staticParam:'+testClass.staticParam) // 靜態參數
        console.log('this.constructor.staticParam:'+this.constructor.staticParam) // undefined !!!
        // 
        console.log('this.params:'+this.params); // undefined
        console.log('testClass.params:'+testClass.params); // undefined
        // 
        console.log('this.name:'+this.name); // testClass !!!
        console.log('testClass.name:'+testClass.name); // testClass !!!
    }

}