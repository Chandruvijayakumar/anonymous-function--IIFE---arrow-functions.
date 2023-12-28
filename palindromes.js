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