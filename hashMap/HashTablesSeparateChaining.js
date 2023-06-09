import { HashMap } from "./HashMap.js";
import { LinkedList } from "../LinkedList/LinkedList.js";
import { ValuePair} from "./HashMap.js"
export class HashTablesSeparateChaining extends HashMap{
    constructor(){
        super()
        this.table = {}
    }

    put(key,value){
        if(key !== null && key !==undefined){
            let pos = this._hashCode(key)
            if(!this.table[pos]){
              
                this.table[pos] = new LinkedList()
            }
            this.table[pos].push(new ValuePair(key,value))
           
            return true
        }

        return false
    }

    get(key){
        let linkedList = this.table[this._hashCode(key)]
        if(linkedList && !linkedList.isEmpty()){
            let current = linkedList.getElementAt(0)
          
            while(current){
                if(current.element.key === key){
                    return current.element.value
                }
                current =current.next
            }
        }
        return undefined
    }


    remove(key){
        let pos = this._hashCode(key)
        let linkedList = this.table[pos]
        if(linkedList && !linkedList.isEmpty()){
            let index = 0
            let current  = linkedList.getElement(index)
            while(current){
                if(current.value.key === key){
                    linkedList.removeAt(index)
                    if(linkedList.isEmpty()){
                        delete this.table[pos]
                    }
                    return true
                }
                current = current.next
                index++
            }
        }
        return false
    }
}