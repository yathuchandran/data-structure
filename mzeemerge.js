function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid=Math.floor((arr.length)/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    return hello(mergeSort(left),mergeSort(right))
}
function hello(first,second)
{
    let i=0
    let j=0
    let k=0
    let temp=[]
    while(i<first.length && j<second.length){
        if(first[i]>second[j]) {
            temp[k]=second[j]
            j++
        }else{
            temp[k]=first[i]
            i++
        }
        k++

    }
    while(i<first.length){
        temp[k]=first[i]
        i++
        k++
    }
    while(j<second.length){
        temp[k]=second[j]
        j++
        k++
    }
   return temp
}

console.log(mergeSort([1,2,6,4,5,8]))