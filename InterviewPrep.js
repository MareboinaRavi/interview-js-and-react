for (var i = 0; i < 5; i++) {
  let myPromise = new Promise((resolve, reject) => {
    resolve(i);
  });

myPromise.then(result => {
    setTimeout(() => {
      console.log(result);
    }, 1000);
  });
}
