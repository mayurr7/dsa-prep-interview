function maxArea(nums: number[]): number {
  let i = 0,
    j = nums.length - 1,
    maxArea = 0;

  while (i < j) {
    if (nums[i] <= nums[j]) {
      const area = (j - i) * Math.min(nums[i], nums[j]);
      maxArea = Math.max(area, maxArea);
      i++;
    } else {
      const area = (j - i) * Math.min(nums[i], nums[j]);
      maxArea = Math.max(area, maxArea);

      j--;
    }
  }
  return maxArea;
}

const nums: number[] = [5, 4, 3, 2, 1];
console.log(maxArea(nums));
export {};

// TC : O(n)
//SC : O(1)
