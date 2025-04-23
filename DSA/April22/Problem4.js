function kFrequent(arr, k) {
  let obj = {};
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    //  let value = arr[i]
    //  console.log(value)
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  for (let value in obj) {
    if (obj[value] >= k) {
      let a = +value
      ans.push(a);
    }
  }
  return ans;
}

let arr = [1, 1, 1, 2, 2, 3];
let k = 2;
console.log(kFrequent(arr, k));
