let score="asdf"
let scores=Number(score)
console.log(typeof score)
console.log(typeof Number(score))
console.log(typeof scores)
console.log(typeof score);
let val=Number(score)
console.log(typeof val);


let value=true
let value1= Number(value) 
console.log(value1) //1

let numstr="234hjk"
let numstr1=Number(numstr)
console.log(numstr1); //NaN

let undef=undefined
let undef1=Number(undef)
console.log(undef1) //NaN 

let nul=null
let nul1=Number(nul)
console.log(nul1) //0

let bol=true
let bol1=Number(bol)
console.log(bol1);//1

let emp=" "
let emp1=Number(emp)
console.log(emp1)//0

let boll="hitesh" //" " false
let boll1= Boolean(boll)
console.log(boll1)

let str=33
let str1=String(str)
console.log(typeof str1)

//-------------------------operations--------------------------------------

console.log(3+4)
console.log(5-4)
console.log(3*4);
console.log(3/9);
console.log(3**3);


let sen1="this is "
let sen2="concat string"
console.log(sen1+sen2);

console.log("1"+2)//12
console.log(2+"1")//21
console.log("2"+2+2);//222//after string value consider string then concat
console.log(2+2+"2")//42


console.log(+true);//1
console.log(+"");//0

let x=10;
console.log(x++)//10
let y=10
y++;
console.log(y)//11

let z=10
console.log(++z)//11

let a=10
++a
console.log(a);//11