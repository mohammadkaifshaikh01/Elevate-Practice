function countVowel(str){
   let vowel = "aeiouAEIOU"
   let count = 0
   for(let i = 0; i < str.length ; i++){
      if(vowel.includes(str[i])){
         count+=1
   }
}
return count
}
let str = "implementation"

console.log(countVowel(str))