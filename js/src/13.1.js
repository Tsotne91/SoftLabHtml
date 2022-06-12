function reverseNumber (number){
    let x=0;
    while(number>0) {
        x = x*10+number%10;
        number=Math.floor(number/10);
    }
    return x;
}
console.log(reverseNumber(123));