function countI(n){
   let count = 0

   while(n > 0){
      let ld = n % 10 //=> 2 
      count+=ld // 0+=2 = 2
      n = Math.floor(n/10) 
   }
   return count

}

let n = 8472
console.log(countI(n))