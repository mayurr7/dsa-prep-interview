function findDesending(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let nums: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2];
let target: number = 11;
console.log(findDesending(nums, target));
 export{};
// TC: O(log n) SC: O(1);
