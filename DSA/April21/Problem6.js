
// function secondLargest(arr){
//    arr.sort()
//    let l = 0
//    let sl = 0

//    for(let i = 0 ; i < arr.length ; i++){
//       if(arr[i] > l){
//          sl = l
//          l = arr[i]
//       }
//       else if(arr[i] > sl && arr[i] < l){
//          sl = arr[i]
//       }
//    }
//    return sl
// // let largest = 0

// }

// let arr = [7, 2, 9, 4, 9, 5]
// console.log(secondLargest(arr))



function secondLargest(arr){
   arr.sort()
   let n = arr.length

   for(let i = n-2 ; i > 0 ; i--){

      if(arr[i] !== arr[n-1]){
         return arr[i]
      }
   }
   return -1
// let larges

}

let arr = [7, 2, 9, 4, 9, 5]
console.log(secondLargest(arr))