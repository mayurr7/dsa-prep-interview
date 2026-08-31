function maxProfit(nums: number[]): number {
  let profit = 0, cheapest = nums[0], i = 1;

  while(i < nums.length){
    if(nums[i] > cheapest){
        profit = Math.max(nums[i] - cheapest, profit);
    }else{
        cheapest = nums[i];
    }
    i++;
  }
  return profit;
}

let nums: number[] =[7, 1, 5];
console.log(maxProfit(nums));

export {};


//TC : O(n)
//SC :  O(1)