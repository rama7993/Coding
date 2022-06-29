/**
 * @param {number[][]} people
 * @return {number[][]}
 */

Array.prototype.insert=function(index,item){
   return this.splice(index,0,item);  
};
 
var reconstructQueue = function(people) {
     people.sort((a,b)=>a[0]==b[0] ? a[1]-b[1] : b[0]-a[0]);//heights in desc
     let arr=[];
     for(let x of people){
         arr.insert(x[1],x);//insert x at index of x[1];
     }
     return arr;
};