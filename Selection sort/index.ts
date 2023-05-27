 export const findSmallest = (arr:number[]): number=>{
    let smallLest = arr[0]
    let smallLestIndex = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] < smallLest){
            smallLest = arr[i]
            smallLestIndex = i
        }
    }
    return smallLestIndex


}

 export const selectionSort  = (arr:number[]):number[] =>{
    let newArr:number[] = []
    let smallestIndex = findSmallest(arr)
    let length = arr.length
    for(let i =0;i<length;i++){
       newArr.push(arr.splice(smallestIndex,1)[0])
         smallestIndex = findSmallest(arr)
      
         

    }
    return newArr
}

