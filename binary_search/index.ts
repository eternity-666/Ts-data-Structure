export  const binary_search = <T>(arr:T [],value:T):number=>{
    let low:number = 0
    let high:number = arr.length-1
    let guess:T
    
    while(low <= high){
        let mid:number = (low+high) >> 1
        guess = arr[mid]
        if(guess === value){
            return mid
        }
        if(guess>value){
            high = mid-1
        }else{
            low = mid +1
        }

        

        
    }
    return -1;

}


const arr1:string [] = ['a','b','c','d','e','f','g','h','i','j']
let b:number = binary_search(arr1,'f')
console.log(b);
