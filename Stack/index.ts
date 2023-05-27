
/**
 * Stack
 * @class Stack
 * @template T
 * @description 栈
 * @example
 * @author chris
 * 
 */

 export class Stack<T>{
   private items:T[] = []
    constructor(){
        this.items = [];
    }
    public push = (item:T):void =>{
        this.items.push(item)
    }

    public peek = ():T =>{
        return this.items[this.items.length-1]
    }

    public isEmpty = ():boolean =>{
        return this.items.length === 0
    }
    public size = ():number =>{
        return this.items.length
    }

    public clear = ():void =>{
        this.items = []
    }

    public pop = (): void=>{
         this.items.pop()
    }

}

export class Stack1<T>{
    private count:number
    private items:{[key:number]:T}
    constructor(){
        this.count = 0
        this.items = {}
       
    }
    public push = (item:T):void =>{
        this.items[this.count] = item
        this.count++
    }
    public pop =():T | null=>{
        if(this.isEmpty()){
            return null
        }
        this.count--
       
        delete this.items[this.count]
        return this.items[this.count]
       
       
    }
    public peek = ():T =>{
        return this.items[this.count-1]
    }
    public isEmpty = ():boolean =>{
        return this.count === 0
    }
    public size = ():number =>{
    return this.count
    }
    public clear = ():void=>{
        this.count = 0
        this.items = {}
    }
    public clear1 = ():void=>{
        while(!this.isEmpty()){
            this.pop()
        }
    }

    public toString = ():string =>{
        if(this.isEmpty()){
            return " "
        }
        let objString = `${this.items[0]}`

        for(let i =1;i<this.count;i++){
            objString = `${objString} , ${this.items[i]}`
        }
        return objString
    }
}