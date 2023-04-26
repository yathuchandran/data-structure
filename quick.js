function quick(arr) {
    if(arr.length<2){
        return arr
    }
let pivot=arr[arr.length-1]
let left =[]
let right=[]
for(i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
        left.push(arr[i])
    }else{
        right.push(arr[i])
    }
}
return [...quick(left),pivot , ...quick(right)]

}


const arr=[2,-2,5,8,1,-5,3,9]
const b=quick(arr)
console.log(b);