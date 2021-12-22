function maxFromArr(arr){
    let max=arr[0];
    for (const n of arr){
        if (n>max) max=n;
    }
    return max;
}
