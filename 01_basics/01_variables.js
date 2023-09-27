const account_id=1020000
let account_name="aniket"
var account_email="aniketsdmn@gmail.com"
account_city="pune"

console.table([account_id, account_name, account_email, account_city,])

// account_id=100;  //not allowed
console.log(account_id)

/*
prefer not use var
because of block and functional scope issue
*/ 

let account_type;
console.log(account_type)