let arr:number[] = [2,3,7,8,10]
for(let i = 0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      arr[i] =  arr[j] * arr[i]
    }
}
console.log(arr)