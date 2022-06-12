const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function maxFromArr(arr) {
    let max = arr[0];
    for (const n of arr) {
        if (n > max) max = n;
    }
    return max;
}

console.log(maxFromArr(numbers));