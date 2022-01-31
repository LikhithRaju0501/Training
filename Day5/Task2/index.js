var a = 10;
var b = 3;

console.log(isEvenOdd(a));
console.log(isEvenOdd(b));
console.log(isEvenOdd(0));

function isEvenOdd(i) {
  if (i == 0) {
    return "Enter Different number";
  } else if (i % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

var oddOrEven=function(i){
    if (i == 0) {
        console.log("Enter Different number") ;
      } else if (i % 2 == 0) {
        console.log( "Even");;
      } else {
        console.log("Odd"); ;
      }
}

oddOrEven(a);
oddOrEven(b);
oddOrEven(0);
