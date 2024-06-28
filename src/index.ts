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

//mearing

interface Books{
    name: string;

}

interface Books{
     price : number
    
}

const books : Books ={
    name : "dembook",
    price : 11001
}


type ID1 = number | string;


function printid(id:any){

 if(typeof id === "string"){
    console.log("id : ", id.toUpperCase());
 }
 console.log("id : ", id);

}

printid("1");
printid(2);


//
function getfirstThree(x : string | number[]){
    return x.slice(0 , 3);
}


console.log(getfirstThree("hello"))
console.log(getfirstThree([1,2,233,4]))


console.log("Genrics...")

function logAnyThing<t>(x:t){
    console.log(x)
    return x;
}

logAnyThing(2);
logAnyThing("A");
logAnyThing([1,2,3,3])



console.log("structural typing or Duck typing..")

interface Users{
    name :string,
    age :number
}


function userInfo(user : Users) : boolean{
    console.log("user info : " , user)
    return true
}

const  olduser = {
    name : "jaydip",
    age : 20
}
userInfo(olduser)

const olduser2 : Users  = {
    name : "don",
    age : 20
    
}
userInfo(olduser2)



interface Iauth{
    username : string;
    passwrod : string;
    login(id : string , pass : string) : boolean;
}
const userlogin : Iauth = {
    username: " don",
    passwrod : "11111",
    login(id : string , pass : string) : boolean{
        console.log(`id ${id} and pass ${pass}`)
        return true;
    }
}
console.log("login function : " ,userlogin.login("jaydip" , "jaydip122"))


//union
const id : number = 10;
type id = number;

//improt class

import democlass from "./class"
import {Userpayload} from "./class"
// const class = require("./class")
 const myuserpayload : Userpayload ={
    name : "jay",
    age : 10
 }
democlass.main(myuserpayload);
democlass.main({name : "jaydip" , age : 10});
const user2  = {
    name : "ram",
    age : 20
}
democlass.main(user2);


