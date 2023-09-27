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