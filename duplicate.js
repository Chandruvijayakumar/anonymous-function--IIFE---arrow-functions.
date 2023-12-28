//Remove duplicates array Using anonymous function

var dup=function(arr){
    var frequency = {};
   
    for(let i = 0; i < arr.length; i++) {
       if(frequency[arr[i]]) {
         frequency[arr[i]] = frequency[arr[i]] + 1;
       } else {
         frequency[arr[i]] = 1;
       }
    }
   
   let final = [];
   for(let x in frequency) {
     if(frequency[x] === 1) {
       final.push(x);
     }
   }
   
   console.log(final); 
   
   };
   dup([34,6,3,8,2,4,65,67]);
  
//Remove duplicates array Using IIFE
   
   (function (arr){
     var frequency = {};
   
    for(let i = 0; i < arr.length; i++) {
       if(frequency[arr[i]]) {
         frequency[arr[i]] = frequency[arr[i]] + 1;
       } else {
         frequency[arr[i]] = 1;
       }
    }
   
   let final = [];
   for(let x in frequency) {
     if(frequency[x] === 1) {
       final.push(x);
     }
   }
   
   console.log(final);   
   })([43,8,2,5,9,44,65]);
   
   //Remove duplicates array Using  arrow function

   const arrow1 = (arr) => {
    const frequency = {};

    arr.forEach((item) => {
        frequency[item] = (frequency[item] || 0) + 1;
    });

    const final = Object.keys(frequency).filter((key) => frequency[key] === 1);

    console.log(final);
};

arrow1([23,56,43,88,23,56,8]);
