function findSum(arr, weight) {
  const dic = {};

  for (let i = 0; i < arr.length; i++) {
    let difference = weight - arr[i];
    if (dic[arr[i]]) {
      return [arr[i], difference];
    } else {
      dic[difference] = i;
    }
  }
  return -1;
}
console.log(findSum([1, 2, 3, 4, 5], 5));
