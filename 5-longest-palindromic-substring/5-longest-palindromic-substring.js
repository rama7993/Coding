/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function(s) {
    var len=s.length;
    let low=0,max_len=0;
        for(let mid=0;mid<len;mid++){
            extend(s,mid,mid);
            extend(s,mid,mid+1,);
        }
    
function extend(s,i,j){
    while(i>=0 && j<s.length && s[i]==s[j]){
            i--;
            j++;
        }
        if(max_len<j-i-1){
            max_len=j-i-1;
            low=i+1;
        }
}

    return s.substring(low,low+max_len);
};