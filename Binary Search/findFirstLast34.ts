function searchRange(nums: number[], target: number): number[] {
  let first = findFirst(nums, target);
  let last = finddLast(nums, target);

  return [first, last];
}

function findFirst(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1,
    first = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      first = mid;
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return first;
}

function finddLast(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1,
    last = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
      last = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return last;
}

let nums: number[] = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target));

export {};


// TC: O(log n) + O(log n) = 2(O(log n)) = O(log n)
// SC : O(1)