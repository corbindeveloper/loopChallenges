// Write code that will multiply all of the values from 1-12 onto some variable product 
// and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. 
// We should get back 479001600 at the end.
let newArr = [1];
let total = 1;

function more() {
   for (i = 1; i < 13; i++) {
      newArr.push(i);
      total = total * newArr[i];
      console.log(total);
   }
}

more();
