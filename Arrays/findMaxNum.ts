function findMax(arr: number[]) {
  let max = arr[0];
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let arr: number[] = [];
console.log(findMax(arr));

export{};
