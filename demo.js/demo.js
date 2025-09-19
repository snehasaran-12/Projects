
let mypromise=new Promise((resolve,reject)=>{

let val=false;

if(val)
{
   resolve("data fecthed") 
}
else
{
    reject("data not ftech")
    console.log("heloo");
}
})

mypromise.then(result=>console.log(result)
).catch(err=>console.log(err)
)