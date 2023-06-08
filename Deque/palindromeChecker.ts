/**
 * @author chris
 * @date 2023.6,8
 * @description 回文检查器
 */
import { Deque } from "./index";
export function palindromeChecker(aString: string){
    if(aString === undefined || aString === null || (aString !== null && aString.length === 0)){
        return false;
    }

    const deque = new Deque<string>();
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar, lastChar;
    for(let i = 0; i<lowerString.length;i++){
        deque.enqueue(lowerString.charAt(i));
    }

    while(deque.size()>1 && isEqual){
        firstChar = deque.dequeue();
        lastChar = deque.removeBack();
        if(firstChar !== lastChar){
            isEqual = false;
        }
    }
    return isEqual;
}