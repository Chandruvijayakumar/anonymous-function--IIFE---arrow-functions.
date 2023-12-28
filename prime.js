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


//the prime numbers in an array Using IIFE

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
