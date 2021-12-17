   const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const arr = text.split(" ");
    let result="";
    for (let i=0; i<arr.length; i++){
        result=result+arr[i][0].toUpperCase();
    }
    console.log(result);
