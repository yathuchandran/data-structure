const a=[7,4,10,8,3,1]
const n=a.length

for(i=0;i<n-1;i++){
    let min=i
    for(j=i+1;j<n;j++){
        if (a[j]<a[min]) {
            min=j
        }
    }
    if (min!==i) {
        [a[i], a[min]] = [a[min], a[i]];
    }
}
console.log(a);