function moveZeros(arr: number[]) {
  let i = 0,
    j = 0;

  while (j < arr.length) {
    if(arr[j] !== 0){
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
    j++;
  }
  return arr;
}

let arr: number[] = [1, 2];
console.log(moveZeros(arr));

export{}
