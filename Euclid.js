//Find the greatest common denominator
//Using Eulid Algorith

function solve(a, b) {
  while (b != 0) {
   let t = a;
    a = b;
    b = t % b;
  }
  return a;
}
//Try out the function
console.log(solve(20, 8));// 4
