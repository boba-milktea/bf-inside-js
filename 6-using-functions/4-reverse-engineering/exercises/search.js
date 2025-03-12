import { search } from './utils/search.js';

let phrase = null;
let query = null;
let output = '';

// use do-while loop
do {
  phrase = prompt('enter a phrase to search');
} while (phrase === null || !confirm(`is this correct: ${phrase}`));

const isCaseSensitive = confirm('do you want a case-sensitive search?')
  ? true
  : false;

do {
  query = prompt(
    'enter a search query, this program will check if it exists in your phrase',
  );
} while (query === null || !confirm(`is this correct: ${query}`));

// check if the phrase contains the query
// check if it is case sensitive

output = search(isCaseSensitive, phrase, query);


alert(`${output} 
Case sensitive: ${isCaseSensitive}`);
