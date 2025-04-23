function rotateArray(arr,k){
   let n = arr.length
   
   let res = []
  for(let i = n-k ; i < n ; i++){
   res.push(arr[i])
  }
  for(let i = 0 ; i < n-k ; i++){
   res.push(arr[i])
  }

  return res
}

let arr = [1, 2, 3, 4, 5]
let k = 3


console.log(rotateArray(arr,k))