// 2Q. Do the below programs in arrow functions.

//Print odd numbers in an array

const oddNo = array => array.filter(num => num % 2 !== 0);
console.log(oddNo([1,2,3,4,5,6,7]));

//Convert all the strings to title caps in a string array
const small = [ "a", "b","i", "n","a","v","a","n"];

const CAPS = small.map(string => string.charAt(0).toUpperCase() + string.slice(1));
console.log(CAPS);

//Sum of all numbers in an array
(function(arr) {
  const result = arr.reduce(function(m, p) {
    return m + p;
  }, 0);
  console.log(result);
})
([1, 3, 5, 7, 8, 9]);
//Return all the palindromes in an array

const input = ['Hello', 'world', 'title', 'reserve', 'macha'];
   const outputArr = [];
    const findPalindrome = (value) => {
       const rev = value.split('').reverse().join('');
       if(value == rev) {
           outputArr.push(value);
       }
   }
 for(let i=0;i<input.length;i++){
if(input[i])
{
findPalindrome(input[i])
}
}console.log(outputArr)