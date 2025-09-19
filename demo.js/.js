

fetch(" https://jsonplaceholder.typicode.com/users")

.then((Response)=>{
   if(!Response.ok)
   {
 throw new Error("Network response was not ok");
     }
   return Response.json();

})

.then((msg)=>{
console.log("your data",msg);

})
.catch(err=>{
    console.log(err.message);
    
})



async function fetchData() {
     try{
        let response =await fetch ("https://jsonplaceholder.typicode.com/users");
    
        if(!response.okry){
            throw new Error ("network id not okey")
}
let data =await response.json();
console.log("yor data",data)

}
catch (error){
    console.log(error.message)
}

    
}
fetchData()