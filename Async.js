// function fetchData(callback) {
//   setTimeout(() => {
//     console.log('Data fetched');
//     callback();
//   }, 1000);
// }

// fetchData(() => {
//   console.log('Callback executed');
// });

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Data fetched');
//       resolve();
//     }, 1000);
//   });
// }

// fetchData().then(() => {
//   console.log('Promise resolved');
// });

// async function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Data fetched');
//       resolve();
//     }, 1000);
//   });
// }

// async function fetchDataAndLog() {
//   await fetchData();
//   console.log('Async/Await executed');
// }

// fetchDataAndLog();
