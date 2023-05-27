const recursion = (arr:number[]):number =>{
    if(arr.length === 1){
        return arr[0]
    }
    return arr[0] + recursion(arr.slice(1))
}
let arr = [1,2,3,4,5]
console.log(recursion(arr));


const count  = (arr:number[]):number=>{
    if(arr.length === 0){
        return 0
    }
    return 1 + count(arr.slice(1))
}


const max = (arr:number[]) :number=>{
    if(arr.length === 2){
        return arr[0] > arr[1] ? arr[0] : arr[1]
    }
    let subMax = max(arr.slice(1))
    return arr[0] > subMax ? arr[0] : subMax
}


const quickSort = (arr:number[]):number[]=>{
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[0]
    let less = arr.slice(1).filter(item => item <= pivot)
    let greater = arr.slice(1).filter(item => item > pivot)
    return quickSort(less).concat([pivot],quickSort(greater))
}