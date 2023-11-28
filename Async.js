
// solution 1
for (var i = 0; i < 10; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(index);
    }, 1000);
  })(i);
}
// solution 2
function createPromise(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(index);
    }, 1000);
  });
}
for (var i = 0; i < 10; i++) {
  createPromise(i)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
}
which solution is best and why??
