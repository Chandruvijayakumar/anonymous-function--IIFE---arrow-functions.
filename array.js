//sum of numbers using  anonymous function
let add = function (n){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum+=n[i];
    }
    console.log(sum);
};

var n= [1,2,8,4,10];
add(n);

//sum of numbers using IIFE
var n= [1,2,7,4,8];
(function (){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum+=n[i];
    } 
    console.log(sum);
})(n);


//sum of numbers using arrow function

var arr=[1,2,12,4,35,6];
const add1=arr.reduce((a,b)=>a+b);
console.log(add1);

