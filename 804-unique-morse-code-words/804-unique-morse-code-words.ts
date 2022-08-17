function uniqueMorseRepresentations(words: string[]): number {
const arr:Array<string> = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
const set=new Set<string>()
for(let word of words){
    let strg:string=''
    for(let letter of word){
        strg+=arr[letter.charCodeAt(0)-97]
    }
    set.add(strg)
}
 
 return set.size
};