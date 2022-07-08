/*
   first task string palindrome
*/

const palindrome = str => {
   return str === str.split('').reverse().join('')
}


/*
   second task brackets
*/ 

function checkBracket (brackets) {
   const data = []
   const getStringBracket = brackets.split('')
   
   for (let index = 0; index < getStringBracket.length; index++) {
      const element = getStringBracket[index];
         element === '{' ?  data.push(element) :  data.pop(element)
         data.length === 0 ? console.log('true') : console.log('false')
   }
}

checkBracket('{}{}')