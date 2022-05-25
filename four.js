// // Write code that will add all of the values from 1-100 onto some variable sum and 
// // at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
let array = [];
let total = 0;
for (let i = 0; i <= 100; i++) {
   if (i < 101) {
      array.push(i);
   }
   total = total + array[i];
   console.log(total);
}
// Not sure if it's asking to print out all 100 numbers
// and then the grand total or the addition all the way up to 5050.
let array = [];
let total = 0;
for (let i = 0; i <= 100; i++) {
   if (i < 101) {
      array.push(i);
   }
   total = total + array[i];
}
console.log(array);
console.log(total);
