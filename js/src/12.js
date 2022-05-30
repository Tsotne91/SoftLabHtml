// let asterisk = "* ";
// for (let i=0; i<5; i++){
//     console.log(asterisk);
//     asterisk=(asterisk+"* ");
// }


for (let i=1; i<6; i++){
    let line = "";
    for(let j=0; j<i; j++) {
        line = line + "* ";
    }
    console.log(line);
}