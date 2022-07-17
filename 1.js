// Reverse a given string.

let str = 'Good';
var res = '';
for(let i=str.length-1; i>=0; i--){
    res = res + str.charAt(i);
}

console.log(res);