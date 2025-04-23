function checkAnagram(str1,str2){
if (str1.length === str2.length){
   return false
}

for(let i = 0 ; i < str1.length ; i++){
   if(!str2.includes(str1[i])){
      return false
   }

   
}
return true
}

let str1 = "listen"
let str2 = "silentp"

console.log(checkAnagram(str1,str2))