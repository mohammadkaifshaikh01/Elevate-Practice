function sortedtwo(arr1, arr2) {
  let arr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i += 1;
    } else {
      arr.push(arr2[j]);
      j+=1
    }
  }
  while(i < arr1.length){
   arr.push(arr1[i])
   i+=1
  }
  while(j < arr2.length){
    arr.push(arr2[j])
    j+=1
   }
  return arr
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

console.log(sortedtwo(arr1, arr2));
