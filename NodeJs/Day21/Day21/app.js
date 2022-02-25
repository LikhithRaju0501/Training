// const os=require('os')
// const version=os.version()
// const totalmem = os.totalmem()
// console.log(totalmem);
// const freemem = os.freemem()
// console.log(freemem);
// const hostname = os.hostname()
// console.log(hostname);
// const platform = os.platform()
// console.log(platform);

// const path =require('path')
// const filePath=path.join('/content','subfolder','file.txt')
// console.log(filePath);
// const normalize= path.normalize('/foo/bar//baz/asdf/quux/..');
// console.log(normalize);
// const isAbsolute= path.isAbsolute('/foo/bar//baz/asdf/quux/..');
// console.log(isAbsolute);
// const format= path.format({
//     root: '/ignored',
//     dir: '/home/user/dir',
//     base: 'file.txt'
//   });
// console.log(format);
// ----------------------------------------------------------------------------
// const {readFileSync, writeFileSync, appendFileSync, unlinkSync}=require('fs')
//Read File
// const readFile=readFileSync('./xyz.txt','utf-8')
// console.log(readFile);

//Write File
// writeFileSync('test.txt','Added hello')

//Append File
// appendFileSync('xyz.txt',' Added data to xyz')
// writeFileSync('test.txt','Added hello',{flag:'a'})

//Delete File
// unlinkSync('test.txt')

// ----------------------------------------------------------------------------------
// const mod=require('./mymod')
// console.log(mod.findSum(1,2));
// console.log(mod.findDiff(1,2));
// console.log(mod.findMul(3,2));
// console.log(mod.findDiv(6,2));

// const mod2=require('./mymod2')
// console.log(mod2(5));
// console.log(mod2(10));


// ----------------------------------------------------------------------------------
const {readFile, writeFile}= require('fs')
const readOp=readFile('./abc.txt','utf-8',(err,res)=>{
    if(err)console.log(err);
    else console.log(res);
})
writeFile('./abc.txt',' Added data',{flag:'a'},(err, res)=>{
    if(err)console.log(err);
    else console.log("Written to file");
})
console.log(readOp);
console.log("Hello");