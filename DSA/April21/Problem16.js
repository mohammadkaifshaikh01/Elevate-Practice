// function findIndex(arr,k){
//    for(let i = 0 ; i < arr.length ; i++){
//       if (arr[i] == k){
//          return i
//       }
//    }
// }

// let arr = [1, 3, 5, 7, 9]
// let k = 7




// console.log(findIndex(arr,k))


function fibbonaci(n){

   if (n==0) return 0
   if (n==1) return 1

   return fibbonaci(n-1) + fibbonaci(n-2)
}
let n = 7
console.log(fibbonaci(n))