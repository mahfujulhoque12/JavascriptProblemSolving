const findOdd = arr => {
    return arr.reduce((a, b) => a ^ b);
  };
  
  console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
  console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
  console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
  console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1
  console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
  console.log(findOdd([10])); // 10


  const getMiddle = str => {
    const len = str.length
    const mid = len / 2
    return len % 2 ? str[Math.floor(mid)] : str[mid - 1] + str[mid]
  };
  
  console.log(getMiddle('test')); // 'es'
  console.log(getMiddle('testing')); // 't'
  console.log(getMiddle('middle')); // 'dd'
  console.log(getMiddle('A')); // 'A'


  const squareDigits = num => {
    return Number(
      num
        .toString()
        .split('')
        .map(ele => ele * ele)
        .join('')
    );
  };
  
  console.log(squareDigits(2112)); // 4114
  console.log(squareDigits(3212)); // 9414
  console.log(squareDigits(9159)); // 8112581

  const highAndLow = numbers => {
    const arr = numbers.split(' ')
    return `max is: ${Math.max(...arr)} & min is: ${Math.min(...arr)}`
  };
  
  console.log(highAndLow('1 2 3 4 5')); // '5 1'
  console.log(highAndLow('1 2 -3 4 5')); // '5 -3'
  console.log(highAndLow('1 9 3 4 -5')); // '9 -5'
  console.log(highAndLow('0 -214 542')); // '542 -214'

  17