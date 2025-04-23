function removeDuplicate(str){
   const unique = new Set()

   for(let i = 0 ; i < str.length ; i++){
      unique.add(str[i])
   }

   return Array.from(unique).join("")
}

let str = "programming"
console.log(removeDuplicate(str))