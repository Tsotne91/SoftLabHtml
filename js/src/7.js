
   const abbr = (text) => text === null ? null :
                        text.split(" ")
                       .map(word => word[0].toUpperCase())
                       .reduce((acc, char) => acc+char);
   module.exports = abbr;

