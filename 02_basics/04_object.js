//singletone object 

const obj= new Object();

obj.name="aniket"
obj.email="aniketsdmn@gmail.com"
obj.mob="4567890"
console.log(obj)


const obj1={
    data:{
        mydata:{
            aniketdata:{
                name:"aniket",
                address:"kukana",
                mob:"4567890"
            }
        }
    }
}

console.log(obj1.data.mydata.aniketdata.name);

//shallow copy

let obj2={
    name:"aniket"
}
let obj4=obj2;
obj4.name="mahesh"
console.log(obj2.name);  console.log(obj4.name)//called as shallow copy
 
// Object.freeze(obj2)
// obj2.name="umesh"
// console.log(obj2.name)//called as deep copy but not write way


const obj3=Object.assign({},obj2);//target,source// calle deep copy
obj2.name="umesh"
console.log(obj2.name)  
obj3.name="rakesh"
console.log(obj2.name)
console.log(obj3.name)

//shallow copy correct example(share the reference)
const myname={
name:"aniket"
}
const myname1=myname;
myname1.name="mahesh"
console.log(myname.name)
console.log(myname1.name)

//avoid shallow copy(called deep copy not share reference)
const myn={
    name:"saurabh"
}
const myn1=Object.assign({},myn);
myn1.name="shree";
console.log(myn.name)
console.log(myn1.name)

console.log(Object.keys(myn))
console.log(Object.values(myn))
console.log(Object.entries(myn))

console.log(myn.hasOwnProperty('name'))


let newobj={
    name:"aniket",
    email:"aniket@gmailc.om"
}

let newobj1={
    city:"aniket",
    email1:"aniket@gmailc.om"
}

let newobj3={...newobj,...newobj1}

console.log(newobj3)

let course={
name:"ReactJs",
purpose:"learning"
}

// const { name,purpose}=course;
// console.log(name);

const { name:n,purpose}=course;
console.log(n);