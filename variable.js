// Lets learn variable syntax of javascript

// In javascript we dont need to tell what kind of variable it is. Like int, char, string etc. Javascript is smart enough to understand.

let marks=30 // Interger variable 

let result=50   //This is a interger

let biken='great' //This is a string

console.log(biken)

//variable can't be dealcre or defined with a blank space in between for example.

//let biken Nepal=40 // This is wrong.

let biken_Nepal=40

console.log(biken_Nepal);

//How can we concatenate two variables

let v1=40

let v2=80

console.log(v1 + ' ' + v2);

// To combine two string

let v3='biken'

let v4='neeruta'

console.log(v3 + ' ' + v4);

// how can we redeclare a variable and change a value. see below

let b='wonderful'
b='notwonderful'

console.log(b) // In this way we can do it. But things canges if you declare varialbe as const.


const bi='wonderful'

bi='notwonderful'

console.log(bi)// This will throw an error remember this

