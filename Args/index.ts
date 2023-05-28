function sum(...args:number[]):number{
  return args.reduce((a,b)=>a+b,0)
}
let a = sum(1,2,3,4)
console.log(a);


function hd(){
    let a = "hello"
    let b = (x:number,y:number):number => x+y
    return [a,b] as const
}

const [n,m]  = hd()
console.log(n,m(1,2));
