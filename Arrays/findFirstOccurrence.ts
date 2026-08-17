function findFisrt(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr: number[] = [4, 7, 2, 7, 9, 7];
let target = 17;
console.log(findFisrt(arr, target));


//TC : O(n)
//SC : O(1)
