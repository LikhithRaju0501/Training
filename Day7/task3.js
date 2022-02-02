console.log("Destructuring");
let arr=[1,2,3,4,5,6,7,8,9];
let [x,y] = arr
console.log("First 2 elements",x,y);
 [x, ,y, ,z, ,a, ,b] = arr;
console.log("All odd numbers",x,y,z,a,b);

console.log("Object destructuring");
let obj={
    fName:"Likhith",
    lName:"Raju"
}
let {fName:firstName,lName:lastName,age=30}=obj;
console.log(firstName,lastName);

console.log(firstName,lastName,age);

console.log("rest parameter");
// function add(a,b,...item){
//    return item.reduce((res,item)=>res+item,0);
// }

let [g,h,...i]=arr;

console.log("Sum of array",arr," excluding the first 2 elements", i.reduce((res,item)=>res+item,0) );

// console.log(add(1,2,3,4,5,6,7,8,9));

console.log("Spread Operator");

let arr2=[0,...arr,10,11];
console.log("Adding ",arr,"in between 0 and 10,11",arr2);


