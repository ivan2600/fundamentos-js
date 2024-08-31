const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSeccessful = true;
    if (operationSeccessful) {
      resolve("La operación fue exitosa");
    } else {
      reject("Fallo la operación");
    }
  }, 2000);
})

promise
  .then((seccessMessage) => {
    console.log(seccessMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });