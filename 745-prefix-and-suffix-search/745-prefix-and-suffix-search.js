/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    mp={};//map
    var n=words.length;
    for(let i=0;i<n;i++){
        let strg=words[i];
        for(let j=1;j<=strg.length;j++){//prefix
            var prefix=strg.slice(0,j);
            for(let k=0;k<strg.length;k++){//suffix
                var suffix=strg.slice(k,strg.length);
                mp[prefix+"*"+suffix]=i;
            }
        }
    }
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    return  mp[prefix+"*"+suffix]!=undefined? mp[prefix+"*"+suffix]:-1;
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */