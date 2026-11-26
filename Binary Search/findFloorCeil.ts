function findFloorCeil(
  nums: number[],
  target: number,
): [number | null, number | null] {
  // let res: number[] = [];
  let floor: number | null = null;
  let ceil: number | null = null;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return [nums[mid], nums[mid]];
    } else if (nums[mid] < target) {
      floor = nums[mid];
      left = mid + 1;
    } else {
      ceil = nums[mid];
      right = mid - 1;
    }
  }

  return [floor, ceil];
}

let nums: number[] = [1, 2, 4, 6, 10, 12, 14];
let x = 20;
console.log(findFloorCeil(nums, x));
