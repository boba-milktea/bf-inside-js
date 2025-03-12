export function repeat(string="", number=0) {
  let output = ""; 
    for (let char of string) {
    output += char.repeat(number); 
  }; 
  return output;
}
