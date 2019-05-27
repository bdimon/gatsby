'use strict';

function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  
  return null;
}

const mylist = [1, 3, 5, 7, 9];

const person = {
  name: "Alice",
  age:32,
  isMarried: false
};
console.log(person.name);
console.log({person});
console.log(person["name"]);


console.log(binarySearch(mylist, 9)); // 1
console.log(binarySearch(mylist, -1)); // null
// let answer = confirm('aYou here?');
// console.log(answer);
let answer = prompt('Have you 18', "yes");
console.log(typeof(answer));
