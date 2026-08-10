function isSorted(arr: number[]): boolean {
  let left = 0,
    n = arr.length - 1;

  if (n < 0) return false;

  while (left < n) {
    if (arr[left] > arr[left + 1]) {
      return false;
    }
    left++;
  }
  return true;
}

let arr: number[] = [];
console.log(isSorted(arr));

export {};
