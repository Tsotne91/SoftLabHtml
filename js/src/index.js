let candles = [4, 4, 1, 3];
function birthdayCakeCandles(candles) {
    // Write your code here

    let result = 0;
    const findNum =  (arr) => Math.max.apply(null, arr);
    const maxNumber = findNum(candles);
    for (let num of candles){
        if (num===maxNumber) result++;
    }
    console.log(result)
}

birthdayCakeCandles(candles);