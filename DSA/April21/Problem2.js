function checkValue(arr,value){
   let count = 0

   for(let i = 0 ; i < arr.length ; i++){
      if(arr[i] === value){
         count+=1
      }
   }
   return count

}

let arr = [2, 3, 2, 4, 2]
let value = 2

console.log(checkValue(arr,value))