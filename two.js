// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

for (let x = 100; x > 0; x--) {
   if (x % 3 === 0) {
      console.log(x);
   }
}