 async function data(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users")
     
    let dat = await data.json()
    console.log(dat)
}
data()

async function name(){
    try{
    let resp = await fetch("https://jsonplaceholder.typicode.com/users")
    let nam=await resp.json()
    console.log(nam)

}
    catch(error){
        console.log("error fetched data",error)
    }
}
name()
