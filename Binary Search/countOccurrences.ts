function findFirst(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1,
    first = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      first = mid;
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return first;
}

function findLast(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1,
    last = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      last = mid;
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return last;
}

function countOccurrences(nums: number[], target: number): number {
  let first = findFirst(nums, target);
  let last = findLast(nums, target);

  return first === -1 ? 0 : last - first + 1;
}

let nums: number[] = [1, 2, 3, 3, 3, 4, 4, 5];
let target = 9;
console.log(countOccurrences(nums, target));


// TC : O(log n)  SC :  O(1);