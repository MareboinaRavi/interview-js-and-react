function x() {
  setTimeout(() => {
    console.log(i);
  }, 1000);
  var i = 10;
}

x();
// OUTPUT:- 10 After ten seconds
//reason ---
// The output of the code snippet `x()` will be `10`.
// This is because the code inside the `setTimeout` callback function is executed asynchronously after a delay of 1000 milliseconds (1 second).
// The `setTimeout` function is non-blocking and adds the callback function to the event loop, allowing the rest of the code to continue executing.
// In the given code, the variable `i` is declared and assigned the value of `10` before the `setTimeout` function is called. Therefore, when 
// the `console.log(i)` statement is executed inside the `setTimeout` callback, it will log the current value of `i`, which is `10`.
// It's important to note that JavaScript has function-level scope, not block-level scope. So, the variable `i` is accessible 
// within the entire `x()` function, including the `setTimeout` callback function.

console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
setTimeout(() => {
  console.log(3);
}, 0);
console.log(4);

// The output of the JavaScript code snippet will be as follows:

// ```
// 1
// 4
// 3
// 2
// ```

// Explanation:
// 1. The code starts executing sequentially.
// 2. The `console.log(1)` statement is executed, printing `1` to the console.
// 3. The first `setTimeout` function is called with a delay of 2000 milliseconds (2 seconds), and its callback function is defined using an arrow function.
// 4. The `console.log(4)` statement is executed, printing `4` to the console.
// 5. The second `setTimeout` function is called with a delay of 0 milliseconds, and its callback function is defined using an arrow function.
// 6. The initial phase of the event loop completes, and the timers are checked. Since the delay of the second `setTimeout` is 0, its callback function is moved to the event queue.
// 7. The event loop continues, and the first `setTimeout` function has not reached its delay yet.
// 8. The event loop checks the event queue and finds the callback function of the second `setTimeout`. It is executed, printing `3` to the console.
// 9. The event loop continues, and the first `setTimeout` function reaches its delay of 2000 milliseconds. Its callback function is moved to the event queue.
// 10. The event loop checks the event queue and finds the callback function of the first `setTimeout`. It is executed, printing `2` to the console.

// Therefore, the output is `1`, `4`, `3`, `2`.

const arr = [10, 20, 30, 40, 50];
for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
  }, 1000);
}

// Actually, the output of the code snippet will not be as expected. It will print `undefined` five times instead of the actual array elements.

// The reason for this unexpected output is due to the use of `var` to declare the loop variable `i`. In JavaScript, `var` has function scope, not block scope. So, the `setTimeout` callback function accesses the value of `i` at the time it is executed, not at the time the `setTimeout` function was called.

// By the time the first `setTimeout` callback function is executed (after one second), the loop has already finished executing, and the value of `i` is equal to `arr.length`, which is out of the array bounds. Therefore, `arr[i]` is `undefined` for each iteration.

// To fix this issue, you can use `let` instead of `var` to declare the loop variable `i`. `let` has block scope, which means it creates a new variable `i` for each iteration of the loop, preserving the correct value within the `setTimeout` callback function.

// Here's the modified code using `let`:

// ```javascript
// const arr = [10, 20, 30, 40, 50];
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(arr[i]);
//   }, 1000);
// }
// ```
// 10
// 20
// 30
// 40
// 50


// With this modification, the code will print the actual array elements in the console after one second, as you initially expected.

console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
// object
// undefined
// false
// true
console.log(0.1 + 0.2 === 0.3);
console.log(9007199254740992 === 9007199254740993);
// false
// true

console.log([] == ![]); //true
// Actually, the output will be `true`. 
// In JavaScript, the `==` operator performs type coercion before comparing values. In this case, the empty array `[]` is coerced to an empty string, while the `![]` expression is coerced to a boolean value. 
// Let's break it down:
// - `[]` coerces to an empty string `""`.
// - `![]` evaluates to `false` since `[]` is a truthy value and the negation operator `!` flips it to `false`.
// - Therefore, the comparison becomes `"" == false`.
// - During the comparison, the boolean value `false` is coerced to a number, resulting in `0`.
// - Finally, the comparison becomes `"" == 0`.

// In JavaScript, an empty string `""` is loosely equal to `0`, so the expression `"" == 0` evaluates to `true`.

console.log(2 + '2' - 1); //21

console.log(3 > 2 > 1); // false
console.log([] === []); //false even == also false
################################################################################
const findMissingNumber = (arr) => {
  const n = arr.length + 1; // Number of elements including the missing one
  const expectedSum = (n * (n + 1)) / 2; // Expected sum of consecutive numbers from 1 to n
  const actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of the elements in the array
  return expectedSum - actualSum; // The difference is the missing number
};

console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3
##################################################################################################
const flattenArray = (arr) => {
  let newArr = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArr = newArr.concat(flattenArray(item));
    } else {
      newArr.push(item);
    }
  });

  return newArr;
};

console.log(flattenArray([1, [2, 4], 5, 6]));
####################################################################################################################
const capitalizeMe = (word) => word[0].toUpperCase() + word.slice(1);

const capitalizeWords = (str) => {
  const arr = str.split(' ');
  const capitalizedArr = arr.map((word) => capitalizeMe(word));
  return capitalizedArr.join(' ');
};

console.log(capitalizeWords("mareboina ravi yadav"));
####################################################################################
const findDuplicates = arr => {
  const duplicates = [];
  const countMap = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (countMap[element]) {
      duplicates.push(element);
    }
    countMap[element] = (countMap[element] || 0) + 1;
  }
  return duplicates;
};
console.log(findDuplicates([1, 2, 3, 2, 4, 1, 5]));
###################################################################
const removeDuplicates = (arr) => {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
};

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
##############################################################################
const findLargestNumber = (arr) => {
  let largest = arr[0];
  arr.forEach((ele) => {
    if (ele > largest) {
      largest = ele;
    }
  });
  return largest;
};

console.log(findLargestNumber([20, 400, 0, 80, 0]));
#################################################################################################
const capitalizeLongWords = (str) => {
  const words = str.split(' ');

  const capitalizedWords = words.map((word) => {
    if (word.length > 5) {
      return word.toUpperCase();
    } else {
      return word;
    }
  });

  return capitalizedWords.join(' ');
};

console.log(capitalizeLongWords("hello world programming is fun"));
###############################################################################################################
const countOccurrences = (arr, target) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
};
console.log(countOccurrences([1, 2, 3, 4, 2, 1, 2], 2));

####################################################################################################################
