let count=new Promise((resolve, reject)=>{
    if(true){
        resolve("Fulfilled");
    }else{
        reject("Not Fulfilled")
    }
})

let count2=new Promise((resolve, reject)=>{
    if(false){
        resolve("Fulfilled");
    }else{
        reject("Not Fulfilled")
    }
})

count.then((res)=>console.log(res))
.catch((err)=>console.log(err))
.finally(()=>console.log("Print no matterwhat"))

count2.then((res)=>console.log(res))
.catch((err)=>console.log(err))
.finally(()=>console.log("Print no matterwhat"))