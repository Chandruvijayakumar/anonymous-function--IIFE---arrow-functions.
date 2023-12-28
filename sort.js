//Return median of two sorted arrays using anonymous function
let median = function (arr1,arr2){
    let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;

}
console.log(final);
};
var arr1 = [77,23,98,67,24,53,2];
var arr2 = [65,23,98,44,78,22,3];
median(arr1,arr2);


//Return median of two sorted array using Immediately Invoked Function Expression(IIFE)

var arr1 = [12,71,35,97,333,12,42];
var arr2 = [34,74,88,3,65,78];
(function (){
   
let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;
 }
 console.log(final);
})(arr1,arr2);

//Return median of two sorted array using Arrow function.

let new1 = [1,43,78,34,90,67];
let new2 = [11,14,17,55,22,86,34];

(() => {
    let arr = [...new1, ...new2];
    
    arr.sort((a, b) => a - b);
    let len = arr.length;
  
    let final;
  
    if (len % 2 !== 0) {
        final = arr[Math.round(len / 2) - 1];
    } else {
        let ans = arr[Math.round(len / 2) - 1] + arr[Math.round(len / 2)];
        final = ans;
    }
    
    console.log(final);
})();

