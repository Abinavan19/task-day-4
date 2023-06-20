// 1Q. Do the below programs in anonymous function & IIFE?

// 1.  Print ODD  Numbers

let Numbers= [1,2,3,4,5,6,7,8,9];
numbers.forEach(function(oddnum){
  if(oddnum%2 !== 0) {
    console.log(oddnum);
  }
});

//IIFE
let number= [1,2,3,4,5,6,7,8,9];
(function(){
  number.forEach(oddnum => {
    if(oddnum%2 !== 0) {
      console.log(oddnum);
    }
  });
})();

// 2.  Convert all the strings to title caps in a string array

const CAPS = function(upper) {
  const result = upper.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
  console.log(result);
};
CAPS([ "a", "b","i", "n","a","v","a","n"]);


(function() {
  const CAPS = function(upper) {
    const result = upper.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(result);
  };
  CAPS([ "a", "b","i", "n","a","v","a","n"]);
})();

//Sum of all numbers in an array
let num = [1,2,3,4,5];
let add = Numbers.reduce(function(a, b) {
    return a + b;
});
console.log(add);

let numbers = [1,2,3,4,5];
let addition = (function(){
    return numbers.reduce(function(a, b) {
    return a + b;
});
})();
console.log(addition);

//Return all the prime numbers in an array
  (function () {
    let no = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];
    let primeno = no.filter(num => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    });
    console.log(primeno);
  })();

  (function () {
    let no1 = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];
    let primeno1 = no1.filter((num) => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    });
    console.log(primeno1);
  })();

  //Return all the palindromes in an array

   (function(){
     var array = ["abi", "navan", "aravan", "raja"];
     var palindromes = array.filter(word => {
       return word.split('').reverse().join('') === word;
     });
     console.log(palindromes);
   })();
   
   (function(){
    var array = ["abi", "navan", "aravan", "raja"];
     var palindromes = array.filter(function(word){
       return word.split('').reverse().join('') === word;
     });
     console.log(palindromes);
   })();

   //Remove duplicates from an array

const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

(function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
})([1, 2, 3, 4, 5, 2, 3, 4]);

