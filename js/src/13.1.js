function reverseNumber (number){
    let remainder, temp=1, newNum=0;
    while(number>0) {
        debugger
        remainder = number%10; // remainder = 3 // remainder = 2
        number=Math.floor(number/10); // number = 12 // number = 1
        newNum+=remainder*temp;
        temp*=10;

        // temp = number;
        // shiftLeft=newNum*10+remainder*10; //temp = 30
        // newNum=shiftLeft+temp%10; //newNum = 32
    }
    return newNum;
}
console.log(reverseNumber(123));