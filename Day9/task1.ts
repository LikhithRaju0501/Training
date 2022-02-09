let num:number = 10;
console.log(num);

let str: string = "Likhith";
console.log(str);

let bool: boolean = false;
console.log(bool);

let arr1: number[] = [1, 2, 3];
console.log(arr1);

let arr2: (number | string)[] = [1, 2, "Hi", 3, "Hello"];
console.log(arr2);

// let emp:object;
let emp: {
  name: string;
  age: number;
};

emp = {
  name: "Likhith",
  age: 20
};

console.log(emp);

let tup: [string, number, any?];
tup = ["Hi", 2, bool];

console.log(tup);

enum cars {
  bmw,
  audi
}

console.log(cars);
