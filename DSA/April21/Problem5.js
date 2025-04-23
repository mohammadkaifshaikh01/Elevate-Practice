function mergeArray(arr1 , arr2){

   let i = 0
   let j = 0

   let ans = []
   while( i < arr1.length && j < arr2.length){
      if(arr1[i] < arr2[j]){
         ans.push(arr1[i])
         i+=1
      }
      else{
         ans.push(arr2[j])
         j+=1
      }
   }
   while( i < arr1.length){
     ans.push(arr1[i])
     i+=1
   }

   while (j < arr2.length) {
      ans.push(arr2[j])
      j+=1
   }
return ans

}


let arr1 = [1,3,5]
let arr2 = [2,4,6]



console.log(mergeArray(arr1 , arr2))