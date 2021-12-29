function reverseNumber (N){
    let C, D=1, P=0;
    while(N) {
        debugger
        C = N%10;
        N=Math.floor(N/10);
        P+=C*D;
        D*=10;
    }
    return P;
}
console.log(reverseNumber(123));