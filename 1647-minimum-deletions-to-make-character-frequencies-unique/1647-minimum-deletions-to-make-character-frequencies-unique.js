/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let mp=new Map(),cnt=0;
    for(const x of s){
        if(mp.has(x))
            mp.set(x,mp.get(x)+1);
        else
            mp.set(x,1);
    }
    let st=new Set();
    for(let [key,val] of mp.entries()){
        while(st.has(val) && val>0){
            val--;
            cnt++;
        }
        st.add(val);
    }
    return cnt;
};