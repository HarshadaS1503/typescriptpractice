const names: string []=[];  //  EMPTY ARRAY
names.push("hs");  


//The readonly keyword can prevent arrays from being changed.


const cities:readonly string[]=["MH","KA","DI"];
//cities.push("HY");     // ERROR



// TUPLE

// define our tuple
let ourTuple:readonly [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];