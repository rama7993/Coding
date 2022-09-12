function bagOfTokensScore(tokens: number[], power: number): number {
 tokens.sort((a,b)=>a-b)
 let i=0,j=tokens.length-1,score=0
 while(i<=j){
     if(power>=tokens[i]){
         score+=1
         power-=tokens[i++]
     }
     else if(score>=1 && i<j){
         score-=1
         power+=tokens[j--]
     }
     else break
 }
    return score
};