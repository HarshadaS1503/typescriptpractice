// BEFORE REST PARAMETERS

let displaycolors=function()
{

    console.log(msg);


for(let i in arguments)
{
     console.log(arguments[i]);
}

}
let  msg= "List of Message";

displaycolors(msg,"red");
displaycolors(msg,"red","blue");
displaycolors(msg,"red","blue","green");

// output

// msg is taken as argument everytime 
// arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

// List of Message
// List of Message
// red
// List of Message
// List of Message
// red
// blue
// List of Message
// List of Message
// red
// blue
// green

//AFTER REST PARAMETERS

//rest parameters: variabe number of arguments/parameters 

let printcolors= function(message:string, ...colors:any)
{
   console.log(message);

   for(let i in colors)
   {
      console.log(colors[i]);
   }
}

var message ="LIST OF COLOURS";

printcolors(message,"red");
printcolors(message,"red","blue");
printcolors(message,"red","blue","green");


// // OUTPUT

// LIST OF COLOURS
// red
// LIST OF COLOURS
// red
// blue
// LIST OF COLOURS
// red
// blue
// green


