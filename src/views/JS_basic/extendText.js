import textClass from './testClass';

export default class newClass extends textClass {
    static staticClassPerson = "靜態新創劍繼承";
    newClassPerson = "非靜態新創劍繼承";
    width = 1;
    height = 1;
    speakName(){
        console.log('this.staticParam:'+this.staticParam) //
        console.log('testClass.staticParam:'+testClass.staticParam) //
        console.log('this.constructor.staticParam:'+this.constructor.staticParam) //
        // 
        console.log('this.params:'+this.params); //
        console.log('testClass.params:'+testClass.params); //
        // 
        console.log('this.name:'+this.name); //
        console.log('testClass.name:'+testClass.name); //
        // 
        console.log('newClass.name:'+newClass.staticClassPerson); //
        console.log('newClass.class:'+newClass.newClassPerson); //
        // 
        console.log('this.name:'+this.staticClassPerson); //
        console.log('this.class:'+this.newClassPerson); //
        // 
        console.log('this.constructor.name:'+this.constructor.staticClassPerson); //
        console.log('this.constructor.class:'+this.constructor.newClassPerson); //
    };
    static staticSpeakName(){
        console.log('this.staticParam:'+this.staticParam) //
        console.log('testClass.staticParam:'+testClass.staticParam) //
        console.log('this.constructor.staticParam:'+this.constructor.staticParam) //
        // 
        console.log('this.params:'+this.params); //
        console.log('testClass.params:'+testClass.params); //
        // 
        console.log('this.name:'+this.name); //
        console.log('testClass.name:'+testClass.name); //
        // 
        console.log('newClass.name:'+newClass.staticClassPerson); //
        console.log('newClass.class:'+newClass.newClassPerson); //
        // 
        console.log('this.name:'+this.staticClassPerson); //
        console.log('this.class:'+this.newClassPerson); //
        // 
        console.log('this.constructor.name:'+this.constructor.staticClassPerson); //
        console.log('this.constructor.class:'+this.constructor.newClassPerson); //        
    };
    get getWidthCrossHeight(){
        return this.width*this.height;
    }
    setWidthHeight([wdith, height]){
        this.width = wdith;
        this.height = height;
    }
    set setWidthHeight2([wdith, height]){
        this.width = wdith;
        this.height = height;
    }
}