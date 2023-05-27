class Queue {
    private count: number
    private lowestCount: number
    private items: Object
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    private enqueue = (element : any):void=> {
        this.items[this.count] = element
        this.count++
    }

    private dequeue = ():any =>{
        if(this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
                                                                                     
    }

    private isEmpty = ():boolean =>{
        return this.count === 0
    }
}