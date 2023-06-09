export class ValuePair{
    constructor(key,value){
        this.key = key
        this.value = value
    }
}

export class HashMap{
    
    constructor(){
        this.table = {}
    }
    _keyToString(key){
        if(key === null){
            return "null"
        }
        if(key === undefined){
            return "undefined"
        }
        if(key instanceof String){
            return `${key}`
        }
        return key.toString()

    }
    _hashCode(key){
        if(typeof key === 'number'){
            return key
        }
        let tableKey = this._keyToString(key)
        let hash = 0
        for(let i=0;i<tableKey.length;i++){
            hash+=tableKey.charCodeAt(i)
        }

        return Math.ceil(hash / 20)
    }
    put(key,value){
        if(key !== null && key !== undefined){
            let pos = this._hashCode(key)

             this.table[pos] = new ValuePair(key,value)
                return true
        }
        return false
       
    }

    get(key){
        let valuePair = this.table[this._hashCode(key)]
        return valuePair ? valuePair.value : undefined
    }
    remove(key){
        let hash  =this._hashCode(key)
        if(this.table[hash]){
            delete this.table[hash]
            return true
        }
        return false
    }

    


}