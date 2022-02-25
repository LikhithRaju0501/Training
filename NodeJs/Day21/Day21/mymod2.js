const isPrime=(a)=>{
    let i=2;
    for(i;i<a;i++){
        if(a%i==0)return false
    }
    return true
}

module.exports=isPrime