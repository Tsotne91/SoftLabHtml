function stringWQuestionMark(word){
    if (!(typeof word === "string")) throw "wrong type parameter";
    else return word.includes('?');
}