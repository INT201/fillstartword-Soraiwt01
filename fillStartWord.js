//const { template } = require('@babel/core')

function fillStartWord(startWord,word) {
  let a = startWord;
  let b = word;

  if(word == null || word == undefined){
   return  undefined;
  }
  else if (a.startsWith(b)){ 
    return (b);
  }
  else {
    return a+b;
  }
  
}
console.log(fillStartWord("startWord","word"));

//module.exports = fillStartWord
