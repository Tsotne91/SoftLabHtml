const text = "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."

const firstSorted = text.split(" ").sort();
let count = 1;
for (let i=1; i<firstSorted.length-1; ++i, count=1){
    while(firstSorted[i]===firstSorted[i-1]){
        ++count;
        firstSorted[i]=firstSorted[i-1];
        firstSorted.splice(i, 1);
    }
    console.log(firstSorted[i-1] + ":" + count )
}
//could not sort by amount of words in descending order.
