// function bubble(arr) {
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if (arr[i]>arr[j]) {
//                 let temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
// }

// const arr=[3,5,7,4,9,-2]
// const b=bubble(arr)
// console.log(b);




// function insert(arr) {
//     for(i=1;i<arr.length;i++){
//      let temp=arr[i]
//      j=i-1
//         while (j>=0 && arr[j]>temp) {
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=temp
//     }
//     return arr
// }

// const arr=[3,5,7,4,9,-2]
// const b=insert(arr)
// console.log(b);




// const a=[3,5,8,1,3,-5]

//     for(i=0;i<a.length-1;i++){
//         let min=i
//         for(j=i+1;j<a.length;j++){
//             if (a[j]<a[min]) {
//                 min=j           
//             }
//         }
//     if (min!==i) {
//         let temp=a[i]
//         a[i]=a[min]
//         a[min]=temp
//     }
//     }
// console.log(a);



// function selection(a) {
//     for(i=0;i<a.length-1;i++){
//         let min=i
//         for(j=i+1;j<a.length;j++){
//             if(a[j]<a[min])
//             min=j
//         }
//     if (min!==i) {
//         let temp=a[i]
//         a[i]=a[min]
//         a[min]=temp
//     }
// }
// return a
// }
// const a=[3,6,0,5,-3,1]
// const b=selection(a)
// console.log(b);



// function sel(a) {
//     for(i=0;i<a.length-1;i++){
//         let min=i
//         for(j=i+1;j<a.length;j++){
//             if(a[j]<a[min]){
//                 min=j
//             }
//         }
//         if(min!==i){
//             let temp=a[i]
//             a[i]=a[min]
//             a[min]=temp
//         }
//     }
//     return a
// }

// const a=[3,6,0,5,-3,1]
// const b=sel(a)
// console.log(b);



// function quick(a) {
//     if(a.length<2){
//         return a
//     }
//     let pivot=a[(a.length-1)]
//     let left=[]
//     let right=[]

//     for(i=0;i<a.length-1;i++){
//         if(a[i]<pivot){
//             left.push(a[i])
//         }else{
//             right.push(a[i])
//         }
//     }
//     return [...quick(left),pivot , ...quick(right)]
// }

// const a=[4,6,48,4,0,6,5]
// const b=quick(a)
// console.log(b);



// function quick(a) {
//     if(a.length<2){
//         return a
//     }
//     let pivot=a[(a.length-1)]
//     let left=[]
//     let right=[]

//     for(i=0;i<a.length-1;i++){
//         if(a[i]<pivot){
//             left.push(a[i])

//         }else{
//             right.push(a[i])
//         }
//     }
//     return [...quick(left),pivot, ...quick(right)]
// }
// const a=[3,5,1,5,8,9]
// const b=quick(a)
// console.log(b);




