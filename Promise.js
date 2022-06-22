//Promise fulfilled

function done(){
    console.log("done");
 }
 function error(){
    console.error("error");
 }

 var promise=new Promise((resolve,reject)=>{
     resolve();
     reject();
 });
 
//  promise.then(done).catch(error);

//  //Promise rejected
//  function done(){
//     console.log(age);
//     let age;
//  }
//  function error(){
//      throw new Error("error found")
//  }

 var promise=new Promise((resolve,reject)=>{
     resolve(); //callback functions
     reject();
 });
 
 promise.then(done).catch(error);//promise is new instance of Promise object

 //A promise can be created using Promise constructor.
 var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.
        then(function () {
            console.log('Success, You are a GEEK');
        }).
        catch(function () {
            console.log('Some error has occurred');
        });
        
    //Example: Promise Resolved
    var promise = new Promise(function(resolve, reject) {
        resolve('Geeks For Geeks');
    })
    
    promise
        .then(function(successMessage) {
        //success handler function is invoked
            console.log(successMessage);
        }, function(errorMessage) {
            console.log(errorMessage);
        })

    
