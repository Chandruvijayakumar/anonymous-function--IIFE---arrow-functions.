//Anonymous function using odd numbers in an array.
let odd = function (arr){
  let Anonymous = [];
for(let x = 0; x<arr.length; x++){
    if(arr[x]%2==1){
      Anonymous.push(arr[x]);
      }
} 
console.log(Anonymous);    
};
let arr = [1,2,3,4,5,6,7,8,9,10];
odd(arr);

//Immediately Invoked Function Expression(IIFE) using odd numbers in an array

let odd1 = [1,2,3,4,5,6,7,8,9,10];
 let Anonymous1 = [];
(function (){
  
   for(let x = 0; x<odd1.length; x++){
    if(odd1[x]%2==1){
        Anonymous1.push(odd1[x])
      
    }
} 
  console.log(Anonymous1);
})(odd1);


//Arrow function using odd numbers in an array.
let numberArray = [1, 2, 3, 4, 5, 6,7,8,9];

let odd3=numberArray.filter((x) => {

return x % 2 !== 0;
});
console.log(odd3);