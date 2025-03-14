import { search } from '../utils/search.js'; 
import { display } from '../utils/display.js'

alert(`enter as many phrases as you want
  
  then enter a search query(case sensitive)
  -> only phrases that includes the query will be kept`); 

  let phrases =[]
  while (true) {
    let input = ""; 
    input = prompt('enter some text or click "cancel"')
    if (input === "") {
      alert("nothing is not allowed")
    }

    if (input === null) {
      break; 
    }

    phrases.push(input); 
  }

  let query = null; 
  while (query === null ||query === "") {
      query = prompt('enter a search query'); 
  }

  const filteredPhrases = search (phrases, query); 
  const matches = display(filteredPhrases); 
  let message = `query: "${query}"
  
maches: 
${matches}
  `

  alert (message); 
  





