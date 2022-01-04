/**
 * @param {string} Determine if String Halves Are Alike /easy
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  let n= (s.length/2);
    let a = s.substring(0,n).split('');
    let b = s.substring(n,s.length).split('');
    let aVowel = a.filter(s=> /[aeiou]/i.test(s));
    let bVowel = b.filter(s=> /[aeiou]/i.test(s));
    return aVowel.length===bVowel.length;
    
 };
