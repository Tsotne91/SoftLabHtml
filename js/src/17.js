function palindrome (word){
    const end = word.substr(word.length/2 + word.length%2);
    const begin = word.substr(0, word.length/2);
    for (let i = 0; i < begin.length; i++) {
        if (begin[i] !== end[end.length - 1 - i]) return false;
    }
    return true;
}
palindrome("abcba");