function reversArr(arr: number[]): number[] {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

const arr: number[] = [1, 2, 3, 4, 5];
console.log(reversArr(arr));
