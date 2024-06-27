// function getotal (numbers){
//     return number.reduce((acc , item) =>{
//            return acc+item
//     },0)
// }
 
// console.log(getotal([3,34,45,5]))  //complie time la error nhi yenar
//run time na yenar 


// function getotal (numbers){
//     return numbers.reduce((acc , item) =>{
//            return acc+item
//     },0)
// }
 
// console.log(getotal([3,34,45,5]))  //yat compile time la error find honar




console.log("hello Wrold from TypeScript")


//type alias

type User ={
    name : string;
    age : number;
    add? : string //optional 
}

///use custome type
const newuser : User={
 name : "jaydip",
 age : 90
}
console.log(newuser)
console.log(newuser.name)

//function 

function login(userdata :User) : void {
    console.log(" return type void")
}

function login1(userdata :User) : User {
    // console.log(" return type void")
    return userdata;
}

function login3(userdata :User){
    // console.log(" return type void")
    return userdata;
}

//pass para
console.log(login1({name: "jaydip" , age : 90}))

//pass same obj
console.log(login1(newuser))


console.log("user ID : ")
type ID = Number  | string;


const userid : ID = 10100;
const userid2 : ID = "1222";
console.log(userid)
console.log(userid2)


console.log("Interfaces.................")

interface trancation {
    peymant : number;
    revices : number;
}

interface account {
    name :string;
    holder : string,
    isactive : boolean;
    tranctions : trancation[] //arry of objects not proprty
}
//user interface

const newtranction1 : trancation ={
    peymant : 110010,
    revices : 4400404
}

const newtranction2 : trancation ={
    peymant : 110010,
    revices : 4400404
}


const newaccount : account={
    name: "jadip",
    isactive:true,
    holder : "don",
    tranctions : [newtranction1 , newtranction2]
}

console.log("account info : " , newaccount)

console.log("Extends Interface.... ")


interface Book {
    name :string;
    price :number;
}

interface Ebook extends Book{
    filesize : number
}

//create object user interface

const mybook : Ebook ={
    name : "demo",
    price : 1221121,
    filesize : 121212
}
console.log("my book : " , mybook)

interface Democlass{

    demofunction():void;
}

 class demo implements Democlass  {
   public  demofunction(): void {
        console.log("this is interface class")
    }

}

class demo2 {
    public static myfunction(){
        console.log("my function")
        return "myfunction"
    
       }
    //    const call = demo2.myfunction(); error
    // demo2.myfunction(); error 

    
}






