function removeDuplicates(nums: number[]): number {
  let i = 0,
    j = 1;

  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
      j++;
    } else {
      j++;
    }
  }
  return i + 1;
}

const nums: number[] = [0, 0, 1];
console.log(removeDuplicates(nums));

//TC : O(n)
//SC : O(1)
