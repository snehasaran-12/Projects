let date = new Date()
 let year =date.getDate(2020)
 console.log(year)

 let arr = new Int16Array(4)
 arr[0] = 100;
 arr[1] =200;
 arr[2] = 300;
 arr[3] =400;
  console.log(arr)
  let num = [1,2,3,4,5,6]
  let nu =new Float32Array(num)
  console.log(nu)
   let number = new Uint8ClampedArray(num)
   console.log(number)
   let big = [1n,2n,3n,4n]
   let numbe = new BigInt64Array(big)
   console.log(numbe)
  let cos = [1n,2n]
  let gap = new BigUint64Array(cos)
  console.log(gap)

  let com = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8]
  let go =  Int16Array.from(com)
console.log(go)
 
 function mynumbers(){
let n =0
return{
    next:function(){
        n+=10
        return {value:n,done:true}
    }
}
 }
 let itre = mynumbers()
 console.log(itre.next())
  

 let str="helo123@"

//  let find=/\d/.test(str)
let find=str.match(/\d+/)

 console.log(find)

 let fruits =["banana","orange","apple"]
 let[a, b, c] =fruits
 console.log(a)
 console.log(b)
 console.log(c)
 
 let [frist, second, ,] =fruits
 console.log(second)
 
let person = {
    name:"sneha",age: 23
}
let{ name,age} = person
console.log(name)
console.log(age)
let{
    name:username, age:userage
}=person
console.log(username)

let user = { name:"ravi",age:"23"}
 greet(user)
 
function greet({ name , age}){
console.log(`hello ${name}, you are ${age}  years old`)}

let [x= 1,y= 2] = []
console.log(x)
console.log(y) 
 let {title = "memo"} = {}
 console.log(title)

 let persons ={
    names:"sneha",
    ages:23,
    address: {
        city:"chennai",
        zip:600001
    }
 }
 let {address:{zip}} = persons
 console.log(zip)
let personz ={
    firstname:"john",
    lastname:"doe",
    age:28
}
 
let {lastname,firstname,country ="us", work=" it"} =personz
console.log(firstname + " " +lastname+ " " + country + work)
// console.log(country)
let {lastname :names} =personz
console.log(names)

let namez ="W3schools"
let [a1, a2, a3, a4, a5, a6,a7, a8] = namez
 console.log(a7) 

 let fruit = ["banana","orange","apple"]
 let [fruit1 ,fruit2] =fruit
 console.log(`First fruit: ${fruit1}, Second fruit: ${fruit2}`);
 
 function myfunction() {
    let carNames ="Volvo"
    console.log(carNames)
 
 }
myfunction(typeof carName)
