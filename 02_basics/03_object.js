
let sym= Symbol("key1");

let obj={
    name:"aniket",
    mob:"567890",
    email:"aniketsdmn@gmail.com",
    [sym]:"mysymbol"
}
// Object.freeze(obj)
console.log(obj.name)
console.log(obj.email);

console.log(obj["name"])

console.log(obj.sym)
console.log(typeof(obj[sym]))

obj.email="aniket123@gmail.com"
console.log(obj.email)

obj.myfunc=function(){
    return `my new function ${obj.name} ${this.name}`
}

console.log(obj.myfunc())



