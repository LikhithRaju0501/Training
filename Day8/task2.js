let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Fulfilled")
    },5000)
})

function func1(){
let res=promise;
console.log("Hello this is not await:",res);
}

func1()


async function func2(){
    let res=await promise.then((result)=>{
        console.log("Hello this is await:",result);
    })
    }
func2()

async function func3(){
    let res=await promise
    console.log(res);
    }
func3()