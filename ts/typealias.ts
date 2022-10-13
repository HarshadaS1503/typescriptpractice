// BEFORE TYPE ALIAS


let employee: {
    name:string,
    age:number,
    salary:number
}={
    name:"HS",
    age:24,
    salary:250000
}

console.log(employee);


// Using a type alias we can define a custom type,and reuse the code

//AFTER TYPE ALIAS


// 1. Defining all properties and methods
type Employee={
    name:string,
    age:number,
    salary:number,
    dept: string
}

// 2. Using it as a type
let employee1:Employee =
{
    name:"SS",
    age:24,
    salary:250000,
    dept:"IT"
}

console.log(employee1);


