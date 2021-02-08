 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
//uses regex to specify the characters that should be displayed
function vowelsAndConsonants(s) {
  let v = [];
  let c = [];
  //for vowels
  for(let i =0; i< s.length; i++) {
      if(s.charAt(i).match(/[aeiou]/)){
          console.log(s.charAt(i));
      }
  }
  //for constants
  for(let i =0; i< s.length; i++) {
      if(s.charAt(i).match(/[^aeiou]/)){
          console.log(s.charAt(i));
      }
  }
}
