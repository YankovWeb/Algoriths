//Find the greatest common denominator
//Using Eulid Algorith

function solve(a, b) {
  while (b != 0) {
    t = a;
    a = b;
    b = t % b;
  }
  return a;
}
//Try out the functß
