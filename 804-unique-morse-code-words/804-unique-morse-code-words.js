/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const arr=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
const set=new Set()
for(let word of words){
    var strg=''
    for(let letter of word){
        strg+=arr[letter.charCodeAt(0)-97]
        
    }
  set.add(strg)
}
 return set.size
        
};