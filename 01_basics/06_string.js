let str1="my name is"
let str2="aniket"

console.log(str1+str2+"phalke")//outdated

console.log(`${str1} ${str2} phalke`)//best way to write

let string="my name is aniket"
console.log(string.substring(3,7));
console.log(string.substring(-50,7))

console.log(string.slice(3,7))
console.log(string.slice(-8,4))

console.log(string.toUpperCase());
console.log(string.trim());
console.log(string.includes("my"));
console.log(string.charAt(2));
console.log(string.indexOf("m"));
console.log(string.replace("aniket","phalke"));

console.log(string.split(" ").join("-"))
console.log(string)
