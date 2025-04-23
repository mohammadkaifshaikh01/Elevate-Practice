function removeZero(arr){
   let ans = []
   for(let i = 0 ; i < arr.length ; i++){
      if(arr[i] !== 0){
         ans.push(arr[i])
      }
   }
   return ans


}

let arr = [0, 1, 0, 2, 3, 0, 4]


console.log(removeZero(arr))