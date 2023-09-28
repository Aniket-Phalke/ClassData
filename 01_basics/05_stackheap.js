//premative datatypes =stack
//Non premative datatypes=Heap

//Example of stack

let myname="aniket"
let newname= myname//only access to copy not same reference


newname="ani"
console.log(myname)
console.log(newname)

const obj1={
    name:"aniket",
    email:"aniketsdmn@gmail.com"
}
const obj2=obj1//directly access to original obj reference
obj2.name="ani"
console.log(obj1.name)
console.log(obj2.name);

