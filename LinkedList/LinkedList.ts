import { defaultEquals } from "./defaultEquals";
import { node } from "./node";
export class LinkedList<T>{
    private count: number;
    private head: node<T> | undefined;
    private equalsfn: (a:T, b:T) => boolean;


    constructor(equalsfn = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.equalsfn = equalsfn;
    }


    //添加元素
    public push(element:T):void{
        const listnode  = new node(element);
        let current :node<T>  | undefined;
        if(this.head === null){
            this.head = listnode;
        }else{
            current = this.head;
            while((current as node<T>).next !== null){
                current = (current as node<T>).next;
            }
            (current as node<T>).next = listnode;
        }
        this.count++;
    }

    //移除元素
    public removeAt(index:number):T | undefined{
        if(index >=0 && index <this.count){
            let current =this.head
            if(index === 0){
              let previous
              for(let i=0;i<index;i++){
                  previous = current;
                  current = (current as node<T>).next;
              }
            }
            this.count--;
            return (current as node<T>).element;
        }
        return undefined;
    }

    //返回元素的位置
   public  getElementAt(index:number):node<T> | undefined{
        if(index >=0 && index < this.count){
            let node = this.head;
            for(let i=0;i<index && node !== null;i++){
                node = (node as node<T>).next;
            }
            return node
        }
        return undefined;
    }

    //插入元素
    public insert(element:T,index:number):boolean{
        if(index >=0 && index <= this.count){
            const listnode = new node(element);
           if(index === 0){
                const current = this.head
                listnode.next = current
                this.head = listnode
           }
           else{
            const previous = this.getElementAt(index-1);
            const current = (previous as node<T>).next;
            listnode.next = current;
            (previous as node<T>).next = listnode;
           }
           this.count++;
              return true;
        }
        return false;
    }


    public indexOf(element:T):number{
        let current = this.head;
        for(let i=0;i<this.count && current !== null;i++){
            if(this.equalsfn(element,(current as node<T>).element)){
                return i;
            }
            current = (current as node<T>).next;
        }
        return -1;
    }


    public remove(element:T):T | undefined{
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    public isEmpty():boolean{
        return this.size() === 0;
    }

    public size():number{
        return this.count;
    }

    public getHead():node<T> | undefined{
        return this.head;
    }

    public toString():string{
        if(this.head === null){
            return '';
        }
        let objString = `${(this.head as node<T>).element}`;
        let current = (this.head as node<T>).next;
        for(let i=1;i<this.count && current !== null;i++){
            objString = `${objString},${(current as node<T>).element}`;
            current = (current as node<T>).next;
        }
        return objString;
    }
    



}