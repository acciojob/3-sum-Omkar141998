function threeSum(arr, target) {
  //your code here
	 const result = arr.sort((a, b) => a - b).reduce((acc, curr, i) => {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = curr + arr[left] + arr[right];
      if (sum === target) {
        return [curr, arr[left], arr[right]];
      } else if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      }
      if (Math.abs(sum - target) < Math.abs(acc - target)) {
        acc = sum;
      }
    }
    return acc;
  }, Infinity);
  return result;
}
}

 module.exports = threeSum;
