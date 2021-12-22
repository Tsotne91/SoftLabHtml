function isPrime (number){
    if (number===2) console.log("2");
    else if (number===3){
        console.log("2");
        console.log("3");
    } else {
            for (let i=4; i<=number; ++i){
                console.log("2");
                console.log("3");
                for (let j=4; j<i; ++j){
                    if (j%i!==0) console.log(j);
                }
            }
    }
}

isPrime(21);