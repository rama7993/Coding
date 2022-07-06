function fib(n: number): number {
 if (n<2)  return n;
  let a:number=0;
  let b:number=1;
  let temp:number;
    for(let i=2;i<=n;i++){
        temp=a+b;
        a=b;
        b=temp;
    }
    return temp;
};