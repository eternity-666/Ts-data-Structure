import { Stack1 } from "../Stack"


export const decimalToBinary = (decNumber:number):string=> {
    const remStack = new Stack1()
    let number = decNumber
    let rem:number
    let binaryString = ''
    while(number > 0){
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
    }
    return remStack.toString()
   

}