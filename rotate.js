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
