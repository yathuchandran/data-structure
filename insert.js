function insert(arr) {
    for(i=0;i<arr.length;i++){
        let temp=arr[i]
        j=i-1
        while (j>=0 && arr[j]>temp) {
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}

const arr=[3,5,1,5,9,10]
const b=insert(arr)
console.log(b);