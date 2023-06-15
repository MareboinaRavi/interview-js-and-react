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
