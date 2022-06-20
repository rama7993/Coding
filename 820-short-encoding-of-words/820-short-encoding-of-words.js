/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    const set=new Set(words);
    for(let word of words){
        for(let i=1;i<word.length;i++)
            set.delete(word.substring(i));//delete substrings
    }
    var cnt=0;
    for(let word of set){
        cnt+=word.length+1;
    }
    return cnt;
};