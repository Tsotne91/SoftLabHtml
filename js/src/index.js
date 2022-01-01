function pal(x) {
    let first_half = x.substr(0, x.length/2);
    let second_half = x.substr(x.length/2 + x.length%2);
    for (let i = 0; i < first_half.length; i++) {
        if (first_half[i] !== second_half[second_half.length - 1 - i]) return false;
    }
    return true;
}

console.log(pal("abcacba"));