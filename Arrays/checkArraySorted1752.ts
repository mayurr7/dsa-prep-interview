function check(nums: number[]): boolean {
  let i = 0;
  let n = nums.length - 1;
  let bPoint = 0;

  if (n < 0) return false;

  while (i < n) {
    if (nums[i] > nums[i + 1]) {
      bPoint++;
    }
    i++;
  }

  if (bPoint === 0) {
    return true;
  }

  if (bPoint === 1 && nums[n] <= nums[0]) {
    return true;
  }

  return false;
}

const nums: number[] = [3, 4, 5, 1, 2];

console.log(check(nums));

export {};
