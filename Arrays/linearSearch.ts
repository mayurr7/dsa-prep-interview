function findNum(arr: number[], target: number): number{

    for(let i =0;  i < arr.length; i++){
        if(arr[i] === target)
            return i;
    }
    return -1;
}

const arr : number[] = [5, 2, 7, 12, 9];
const target = 12;
console.log(findNum(arr, target));



// Time Complexity (Best Case)? --- O(1)
// Time Complexity (Worst Case)?-------O(n)
// Space Complexity?----------------------o(1)
// Why is this algorithm called Linear Search?------------its visit every elemnet
// Why do we use Early Return?----------------to avoid travles on full arary 

export {};