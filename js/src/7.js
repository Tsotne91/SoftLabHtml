
function abbr (text){
      if (text === null) return null;
      else if (text === '') return '';
      else return text.split(" ")
             .map(word => word[0].toUpperCase())
             .reduce((acc, char) => acc + char);
   }
   module.exports = abbr;