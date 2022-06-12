function printPrime (number) {
    if (number == null) return ('enter a valid number');
    else if (!(Number.isInteger(number))) return ('invalid input type');
    else if (number <= 1) return ('no prime numbers');
    else if (number === 2) return ("2");
    else if (number === 3) {
        return ("2 3");
    } else {
        const higherNum = () => {
            let result ='';
            let count = 0;
            for (let i = 4; i <= number; ++i, count = 0) {
                for (let j = 2; j < i; ++j) {
                    if (i % j === 0) ++count;
                    }
                if (count === 0) result += i + '\n';
            }
            return ("2\n3\n" + result);
            }
            return higherNum();
        }
}
console.log(printPrime(100));