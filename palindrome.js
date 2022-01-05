/* 
***** Documentation by Steven Schulte *****
permutation is a rearrangement of letters
palindorme is a word / string is the same forwards and backwards

–– Tact Coa
Description: "Tact Coa" is a permutation of a palindrome which should
return True, but is not a palindrome itself
–– Tacocat
Description: Tacocat is a palindrome
*/

/*
  "taco cat" = tacocat // True
  "atco cat" = tacocat // True
  " rac ecar rara " = arracecarra // True
  "chirpingmermaid" = c h p i n g e a d // False
  "aabbc" = abcba // True 
  "aaaabbbbcc" = aabbccbbaa // True 
  "aabc" = abac or acab // False
  "" = // False as an empty string
 */

let palPerm = (s) => {
   let hash = {};
   let charCount = 0;
   let stArray = s.split('');
   console.log(stArray);
   stArray.forEach( (letter) => { 
      // skip spaces
      if (letter === ' ') {
        return;
      }
      // if  we see the same letter again, delete from hash
      if (hash[letter]) {
        delete hash[letter];
      } else {
        hash[letter] = true;
      }
      charCount++; 
   });  
    // check hash at the end: odd - 1 key left, even - no keys left
    if (charCount != 0 && charCount % 2 === 0) {
      return Object.keys(hash).length === 0;
    } else {
      return Object.keys(hash).length === 1;
    }
};
console.log(
  palPerm('taco cat'), 
  palPerm('atco cat'),
  palPerm(' rac ecar rara '),
  palPerm('chirpingmermaid'),
  palPerm('aabbc'),
  palPerm('aaaabbbbcc'),
  palPerm('aabc'),
  palPerm('')
);
