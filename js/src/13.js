function isPrime (number){
    if (number <=1 ) console.log('no prime numbers');
    if (number===2) console.log("2");
    else if (number===3){
        console.log("2");
        console.log("3");
    } else {
        console.log("2");
        console.log("3");

            for (let i=4; i<number; ++i){
                for (let j=2; j<i; ++j) {
                    if (i % j === 0) {
                        ++i;
                    }
                    console.log(i);
                }
            }
    }
}


isPrime(21);