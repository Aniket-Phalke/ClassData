import sum from "./sum";
it("sum of a & b",()=>{
    let result=sum(1,2)
    expect(result).toBe(3)
})

//all test file run= npm run test
//specific file test= npm test -- sum.test.js

it("when a & b",()=>{
    let result=sum("1","2");
    expect(result).toBe(3)
})