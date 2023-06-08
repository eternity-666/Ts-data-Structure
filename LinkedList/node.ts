

export class node<T>{
    public element:T;
    public next:node<T> | undefined;
    constructor(element:T){
        this.element = element;
        this.next = undefined;
    }
}