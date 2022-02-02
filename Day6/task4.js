let arr = [1,2,3,4,5,6,7]
arr.pop();
console.log(arr);
arr.push(7)
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);

let slice = arr.slice(1,4)
console.log("Sliced:",slice);
console.log("Array:",arr);

let splice=arr.splice(4,2,8,9);
console.log("Removed 2 elements starting from index 4 and added 8,9:",arr);

splice=arr.splice(7,0,10,11);
console.log("Added 10, 11 to last of array:",arr);