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