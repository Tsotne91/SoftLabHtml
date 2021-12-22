   const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
   const result = text.split(" ")
                       .map(word => word[0].toUpperCase())
                       .reduce((acc, char) => acc+char);
   console.log(result);

