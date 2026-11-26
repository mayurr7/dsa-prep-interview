function findMin(nums: number[]): number{
    let left = 0; let right = nums.length-1;
    let min = Infinity;

    while(left <= right){
        let mid = Math.floor((left + right)/2);

        if(nums[left] <= nums[mid]){
           min = Math.min(nums[left], min);
           left = mid + 1;
        }else{
             min = Math.min(nums[mid], min);
           right = mid - 1;
        }
    }

    return min;
}

let num : number[] =  [5, 1, 2, 3, 4];
console.log(findMin(num));