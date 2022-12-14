'use strict';
//Complete the solution so that it reverses the string passed into it.
function solution(str) {
  let reverseString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
  console.log(reverseString);
}
solution('world');

let str = 'World';
let newString = '';
for (let i = str.length - 1; i >= 0; i--) {
  newString += str[i];
}
console.log(newString);

// Code wars people solutions
function solution(str){
    return str.split('').reverse().join('');
}

/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).*/
// My solution
function countSheeps(arrayOfSheep) {
  let sheepInPlace = 0;
  for (let i = 0; i <= arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      sheepInPlace += 1;
    }
  }
  return sheepInPlace;
}
countSheeps();
//CODE WARS FORUM SOLUTION
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
 }

/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. */
function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
highAndLow('1 2 3');
//Given an array of ones and zeroes, convert the equivalent binary value to an integer.

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2);
};
console.log(binaryArrayToNumber([1, 1, 1, 1]));

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num) {
  let total = '';
  let numberToString = num.toString();
  for (let i = 0; i <= numberToString.length - 1; i++) {
    total += numberToString[i] * numberToString[i];
  }
  let returnToNumber = Number(total);
  return returnToNumber;
}
squareDigits([9119]);

/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
  let countVowels = 0;
  for (let i = 0; i <= str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      countVowels++;
    }
  }
  return countVowels;
}
getCount('Mario');
/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.*/

function getSum(a, b) {
  let sum = 0;
  let lower, highest;
  if (a === b) {
    return a;
  } else {
    if (a > b) {
      highest = a;
      lower = b;
    } else {
      highest = b;
      lower = a;
    }
    for (let i = lower; i <= highest; i++) {
      sum += i;
    }
  }
  return sum;
}
getSum(-5, -1);

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// A B C D E F G H I J K L M

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
  const collorLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
  ];
  let counterError = 0;
  let strInput = s.split('');
  strInput.map(x =>
    collorLetters.includes(x) === false ? counterError++ : (counterError += 0)
  );
  return `${counterError}/${s.length}`;
}
printerError('aaaxbbbbyyhwawiwjjjwwm');

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
function grow(x) {
  let toNumber = x;
  let sum = 1;
  let total = 0;
  for (let i = 0; i <= x.length - 1; i++) {
    sum *= toNumber[i];
  }
  return sum;
}
grow([2, 2, 2, 2, 2, 2]);

//Complementary DNA

function DNAStrand(dna) {
  //your code here
  let dnaStr = '';
  const splitStr = dna.split('');
  for (const i of splitStr) {
    if (i === 'T') {
      dnaStr += 'A';
    } else if (i === 'A') {
      dnaStr += 'T';
    } else if (i === 'C') {
      dnaStr += 'G';
    } else if (i === 'G') {
      dnaStr += 'C';
    }
  }
  return dnaStr;
}
DNAStrand('GTAT');

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  return num < 0 ? num : -num;
}
makeNegative(42);

function rowSumOddNumbers(n) {
  return n * n * n;
}
rowSumOddNumbers(5);

let num = 10;
console.log(Math.pow(num, 4)); // pow method take number and mulptiply it how we want by his value if num, 2 = 10 * 10

// Return TRUE if the word is Isogram
function isIsogram(str) {
  str = str.toLocaleLowerCase();
  let set = new Set(str);
  if (str.length === set.size) {
    return true;
  } else {
    return false;
  }
}

//Find avverage of array numbers if array is empty return 0

function findAverage(array) {
  let sum = 0;
  if (array.length === 0) {
    return 0;
  }
  for (const i of array) {
    sum += i;
  }
  let totalAvarrage = sum / array.length;
  return totalAvarrage;
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let arr = [];
  let sum;
  for (let i = 1; i < num + 1; i++) {
    arr.push(i);
  }
  sum = arr.reduce((c, p) => c + p, 0);
  return sum;
};

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  return average < yourPoints;
  // Your code here
}

