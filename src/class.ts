export interface Userpayload {
    name : string
    age : number
}

class DemoClass {

    // const id :number = 10;


    public static demofunction(){
        console.log("demofunction called")
    }
    public static main(payload :Userpayload){
        // DemoClass.demofunction();
        // DemoClass d = new DemoClass();
        console.log("user payload : " , payload)
    }
}

export default DemoClass;