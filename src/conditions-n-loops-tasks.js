/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const array = [a, b, c];
  let max = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.y < 8) {
    for (let i = queen.y; i <= 8; i += 1) {
      if (king.x === queen.x && king.y === i) {
        return true;
      }
    }
  }
  if (queen.y < 8 && queen.x < 8) {
    for (let i = queen.x, j = queen.y; i <= 8 && j <= 8; i += 1, j += 1) {
      if (king.x === i && king.y === j) {
        return true;
      }
    }
  }
  if (queen.x < 8) {
    for (let i = queen.x; i <= 8; i += 1) {
      if (king.x === i && king.y === queen.y) {
        return true;
      }
    }
  }
  if (queen.y < 8 && queen.x < 8) {
    for (let i = queen.x, j = queen.y; i > 0 && j <= 8; i -= 1, j += 1) {
      if (king.x === i && king.y === j) {
        return true;
      }
    }
  }
  if (queen.x > 0) {
    for (let i = queen.x; i > 0; i -= 1) {
      if (king.x === i && king.y === queen.y) {
        return true;
      }
    }
  }
  if (queen.y > 0) {
    for (let i = queen.y; i > 0; i -= 1) {
      if (king.x === queen.x && king.y === i) {
        return true;
      }
    }
  }
  if (queen.y > 0 && queen.x > 0) {
    for (let i = queen.x, j = queen.y; i > 0 && j > 0; i -= 1, j -= 1) {
      if (king.x === i && king.y === j) {
        return true;
      }
    }
  }
  if (queen.y > 0 && queen.x <= 8) {
    for (let i = queen.x, j = queen.y; i <= 8 && j > 0; i += 1, j -= 1) {
      if (king.x === i && king.y === j) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const isEqualLength = a === b || b === c || a === c;
  const isTriangle = a + b > c && b + c > a && a + c > b;
  return isEqualLength && isTriangle;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let resultConverted = '';
  function converted(number, result) {
    let res = result;
    switch (number) {
      case 1:
        res += 'I';
        break;
      case 4:
        res += 'IV';
        break;
      case 5:
        res += 'V';
        break;
      case 9:
        res += 'IX';
        break;
      case 10:
        res += 'X';
        break;
      default:
        break;
    }

    if (number > 1 && number < 4) {
      for (let i = number; i > 0; i -= 1) {
        res += 'I';
      }
      return res;
    }
    if (number > 5 && number < 9) {
      res += 'V';
      for (let i = number; i > 5; i -= 1) {
        res += 'I';
      }
    }
    return res;
  }
  if (num <= 10) {
    resultConverted = converted(num, resultConverted);
  }
  if (num > 10) {
    const item = num % 10;
    const dd = Math.trunc(num / 10);
    for (let i = dd; i > 0; i -= 1) {
      resultConverted += 'X';
    }
    resultConverted = converted(item, resultConverted);
  }
  return resultConverted;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (res.length) {
      res += ' ';
    }
    switch (numberStr[i]) {
      case '-':
        res += 'minus';
        break;
      case '0':
        res += 'zero';
        break;
      case '1':
        res += 'one';
        break;
      case '2':
        res += 'two';
        break;
      case '3':
        res += 'three';
        break;
      case '4':
        res += 'four';
        break;
      case '5':
        res += 'five';
        break;
      case '6':
        res += 'six';
        break;
      case '7':
        res += 'seven';
        break;
      case '8':
        res += 'eight';
        break;
      case '9':
        res += 'nine';
        break;
      case '.':
      case ',':
        res += 'point';
        break;
      default:
        return res;
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const middle = Math.trunc(str.length / 2);
  let res = false;

  for (let i = middle, j = middle; i >= 0 && j < str.length; i -= 1, j += 1) {
    if (str.length % 2) {
      res = str[i] === str[j];
    } else {
      res = str[i - 1] === str[j];
    }
  }

  return res;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let number = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) {
      number = i;
    }
  }
  return number;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = num;
  let isContains = false;
  while (number) {
    if (digit === number % 10) {
      isContains = true;
      return true;
    }
    number = Math.trunc(number / 10);
  }
  return isContains;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let res = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (i) {
      let left = i - 1;
      let right = i + 1;
      let leftSum = 0;
      let rightSum = 0;
      while (left >= 0) {
        leftSum += arr[left];
        left -= 1;
      }
      while (right < arr.length) {
        rightSum += arr[right];
        right += 1;
      }

      if (rightSum === leftSum) {
        res = i;
      }
    }
  }
  return res;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const array = [];
  for (let i = 0; i < size; i += 1) {
    array[i] = [];
    for (let j = 0; j < size; j += 1) {
      array[i][j] = 1;
    }
  }

  let row = 0;
  let col = 0;
  let start = 0;
  let finish = size - 1;
  for (let i = 1; i <= size * size; i += 1) {
    array[row][col] = i;

    if (row === start && col < finish) {
      col += 1;
    } else if (col === finish && row < finish) {
      row += 1;
    } else if (col > start && row === finish) {
      col -= 1;
    } else if (col === start && row === finish) {
      row -= 1;
      start += 1;
      finish -= 1;
    } else if (col === start - 1 && row > start) {
      row -= 1;
    }
  }
  return array;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newArray = matrix;
  let rotateAray = [];
  for (let i = 0; i < newArray.length; i += 1) {
    let row = [];
    for (let j = 0; j < newArray.length; j += 1) {
      const el = newArray[newArray.length - j - 1][i];
      row = [...row, el];
    }
    rotateAray = [...rotateAray, row];
  }

  for (let i = 0; i < newArray.length; i += 1) {
    for (let j = 0; j < newArray.length; j += 1) {
      newArray[i][j] = rotateAray[i][j];
    }
  }
  return newArray;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const duplicateArray = arr;

  const pivot = arr[0];
  const lessArray = [];
  const greatArray = [];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] >= pivot) {
      greatArray[greatArray.length] = arr[i];
    } else {
      lessArray[lessArray.length] = arr[i];
    }
  }

  const result = [...sortByAsc(lessArray), pivot, ...sortByAsc(greatArray)];

  for (let j = 0; j < duplicateArray.length; j += 1) {
    duplicateArray[j] = result[j];
  }

  return duplicateArray;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let newStr = str;
  const change = (item) => {
    let first = '';
    let second = '';
    for (let i = 0; i < item.length; i += 1) {
      if (i % 2) {
        second += item[i];
      } else {
        first += item[i];
      }
    }
    return first + second;
  };

  for (let i = 1; i <= iterations; i += 1) {
    newStr = change(newStr);
    if (newStr === str) {
      return shuffleChar(str, iterations % i);
    }
  }

  return newStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const array = [...`${number}`];
  let indexNum = 0;
  let item;
  for (let i = array.length; i >= 0; i -= 1) {
    if (array[i + 1] > array[i]) {
      item = array[i];
      indexNum = i;
      break;
    }
  }
  let firstPart = [];
  let secondPart = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i < indexNum) {
      firstPart = [...firstPart, array[i]];
    } else {
      secondPart = [...secondPart, array[i]];
    }
  }

  let min = secondPart[1];
  let index = 1;
  for (let i = 0; i < secondPart.length; i += 1) {
    if (item < secondPart[i] && secondPart[i] < min) {
      min = secondPart[i];
      index = i;
    }
  }
  const temp = secondPart[index];
  secondPart[index] = item;
  secondPart[0] = temp;

  const [el, ...second] = secondPart;
  const res = sortByAsc(second);
  const result = [...firstPart, el, ...res];

  let num = 0;

  for (let i = 0; i < result.length; i += 1) {
    num += +result[i] * 10 ** (result.length - i - 1);
  }

  return num;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
