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

//sum of numbers using Immediately Invoked Function Expression(IIFE)
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

//-------------------------------------------------------------------------------------------------


//Anonymous function using all the strings to title caps in a string array
let title = function (str) {
	
	for (let i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	console.log(str.join(' '));
}

let str = ['the', 'sun', 'shines','brightly.'];

title(str);


//Immediately Invoked Function Expression(IIFE) function using all the strings to title caps in a string array
let str1 = ['the', 'sun', 'shines','brightly.'];

(function (){
	for (let i = 0; i < str1.length; i++) {
	     str1[i] = str1[i].toLowerCase();
		str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
	}
	console.log(str1.join(' '));
})(str1);



//Arrow function using all the strings to title caps in a string array
let str2 = ['the', 'sun', 'shines','brightly.'];

 let strCaps = str2.map((item) => {

    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
});
console.log( strCaps.join(' '));

//------------------------------------------------------------------------------------------------------------------

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



//------------------------------------------------------------------------------------------------------------------


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


//------------------------------------------------------------------------------------------------------------------


//The palindromes in an array using anonymous function

let palindrome = function(arr){
    
    var N=arr.length;
    var out =[];
    for(let i=0;i<arr.length;i++){
        let final = arr[i];
        let str = final.split('').reverse().join('');
        if(str==arr[i])
       out.push(arr[i]);
        }
     console.log(out);
   
};
var arr =["abc", "NUN", "dad", "REVIVER", "LEVEL"];

palindrome(arr);

//The palindromes in an array using Immediately Invoked Function Expression(IIFE) function

 
(function(){
    var arr1 =["abc", "NUN", "dad", "REVIVER", "LEVEL"];
    var N1=arr1.length;
    var out =[];
    for(let i=0;i<arr1.length;i++){
        let final = arr1[i];
        let str = final.split('').reverse().join('');
        if(str==arr1[i])
       out.push(arr1[i]);
        }
     console.log(out);
   
})(); 


//The palindromes in an array using arrow function
var arr =["abc", "NUN", "dad", "REVIVER", "LEVEL"];
arr = arr.filter((s) =>{
let len = s.length;
for (var i = 0; i<len / 2; i++) {
if (s[i] == s[len - i - 1]){
return true;
}
else{
return false;
}
}
});
console.log(arr);
//output
//[ 'NUN', 'dad', 'REVIVER' ]





//------------------------------------------------------------------------------------------------------------------


//the prime numbers in an array Using Anonymous fucntion.

var prime=function(a){

    var  res=[];
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++;
            }
        }
        if(count==2)
        {
            res.push(a[i]);
        }
    }
    console.log(res);
};
prime([4, 14, 13, 15, 7, 19, 8, 5, 3, 9.]);


//the prime numbers in an array Using Immediately Invoked Function Expression(IIFE)

(function(a1){
    var  res1=[];
    for(i=0;i<a1.length;i++){
        count1=0;
        for(j=1;j<=a1[i];j++){
            
            if(a1[i]%j===0){
                count1++;
            }
            
        }
            
        if(count1==2){
                res1.push(a1[i]);
            
        }
    }
    console.log(res1);
 
})
([56, 34, 24, 3, 32, 40, 4, 23, 96, 12.]);


//the prime numbers in an array using arrow function

let prime1 = (arr) => {
    return arr.filter((n) => {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    });
  };
  console.log(prime1([5 ,4, 1, 6, 0, 3, 5, 4, 1, 6.]));






//------------------------------------------------------------------------------------------------------------------


//Rotate an array by k times Using anonymous function
let rotation = function (arr,n,d)
{
    let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
            
        }
         let out = [];
        for (let i = 0; i < n; i++) {
           out.push(arr[i]);
            
        }
        console.log(out);
};
var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

rotation(arr, n,k);


//Rotate an array by k times Using IIFE

var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

(function(arr,n,k){
   let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
            
        }
         let out = [];
        for (let i = 0; i < n; i++) {
            out.push(arr[i]);
            
        }
        console.log(out);  
})(arr,n,k);

//Rotate an array by k times using arrow function.

let rotateArray = (array, x, k) => {
    let p = 1;

    while (p <= y) {
        let last = array[0];

        for (let i = 0; i < x - 1; i++) {
            array[i] = array[i + 1];
        }

        array[x - 1] = last;
        p++;
    }

    let out = [];
    for (let i = 0; i < x; i++) {
        out.push(arr[i]);
    }

    console.log(out);
};

let array = [4, 5, 6, 1, 2, 3];
let x = array.length;
let y = 3;

rotateArray(array, x, y);

//------------------------------------------------------------------------------------------------------------------


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

//--------------------------------------------------------------------------------------------------------------
