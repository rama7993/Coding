function validUtf8(data: number[]): boolean {
 let rembits:number=0
 for(let num of data){
     if(rembits!=0){
         if(num>>6 === 0b10) 
             rembits-=1 //n-1 bits
         else 
             return false
     }
     else{
            if(num>>7 === 0b0) 
                rembits=0 //1 byte
            else if (num>>5 === 0b110)
                rembits=1 //2 bytes
            else if (num>>4 === 0b1110) 
                rembits=2 //3 bytes
            else if (num>>3 === 0b11110)
                rembits=3 //4 bytes
            else
                return false
     }
 }
    return rembits === 0
    
};