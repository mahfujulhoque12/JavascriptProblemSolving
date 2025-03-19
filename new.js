// Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.


const findOdd = arr => {
    return arr.reduce((a,b)=>a ^b)
  };
  
  console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
  console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
  console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
  console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1
  console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
  console.log(findOdd([10])); // 10




  //Given a word, your job is to return the middle character(s) of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

  const getMiddle = str => {
    const len = str.length
    const mid = len/2;

    return len % 2 ? str[Math.floor(mid)] : str[mid-1] + str[mid]
  };
  
  console.log(getMiddle('test')); // 'es'
  console.log(getMiddle('testing')); // 't'
  console.log(getMiddle('middle')); // 'dd'
  console.log(getMiddle('`A`')); // 'A'


//   You probably know the "like" system from Facebook and other social media. People can "like" posts, photos or other items. We want to create the text that should be displayed next to such an item.

// Implement a function that takes an input array, containing the names of people who like an item and returns an output string formatted nicely as shown below.

const likes = names => {
  const len = names.length;
  let output;
  switch (len) {
    case 0:
      return  output = "No one like this"
     case 1:
        return output = `${names[0]} likes this`   
      case 2 :
        return output = `${names[0]}, ${names[1]} like this`
       case 3:
        return output = `${names[0]},${names[1]} and ${names[2]} like this`
     
    default:
        return output = `${names[0]} , ${names[1]}  and ${names.length} like this`  
    
  }
  };
  
  console.log(likes([])); // 'no one likes this'
  console.log(likes(['Peter'])); // 'Peter likes this'
  console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
  console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
  console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'



//   Write a function that accepts an array of 10 integers (between 0 and 9), and returns a string of those numbers in the form of a phone number.

const createPhoneNumber = numbers => {
 const str = numbers.join(' ')
 console.log(str)
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'