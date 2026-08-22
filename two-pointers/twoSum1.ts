function twoSum(arr: number[], target: number): number[] {
    let map = new Map<number, number>();
     
    for(let i = 0; i < arr.length; i++){
        let num = target - arr[i];
        if(map.has(num)){
           return [map.get(num)!, i]
        }else{
            map.set(arr[i], i);
        }
    }
    return [];
}

let arr: number[] = [3, 2, 4];
let target = 6;
console.log(twoSum(arr, target));



/**
 * TC : O(n)
 * SC : O(1)
 */