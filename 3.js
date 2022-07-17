// Reverse each word in a string.
// Input:  Hi my name is <Your Name>
// Output: iH ym eman si <Your Name in Reverse>

var str = 'Hi my name is Savan';

str = str.split(' ');

let res = [];
for(let i=0; i<=str.length; i++){
    console.log(str[i])
    res = res + str.charAt(i)

}
console.log(str);