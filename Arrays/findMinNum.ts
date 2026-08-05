function findMinn(arr : number[]){
    let min = arr[0]
    
    let n = arr.length-1;
    if(n < 0) return min;

    for(let i = 1; i <= n; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
    
}

const arr : number[] = [1,2, -4, -5, 0];
console.log(findMinn(arr));

export{}