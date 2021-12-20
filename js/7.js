   const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
   const arr = text.split(" ");
    let result="";
    for (let x of arr){
        result=result+(x[0].toUpperCase());
    }
    console.log(result);

