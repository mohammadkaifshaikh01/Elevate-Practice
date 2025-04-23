function factorial(value){
let fact = 1
   for(let i = 1 ; i <= value ; i++){
      fact = fact * i
   }
   return fact


}

let value = 4

console.log(factorial(value))