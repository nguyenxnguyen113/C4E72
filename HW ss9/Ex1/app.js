let promise = new Promise(function(resolve) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("Promise is da best"), 5000);
  });
  promise.then(
    result => alert(result),
  )
 async function getData() {
     const data = await promise
     alert(data);
 }
 getData();