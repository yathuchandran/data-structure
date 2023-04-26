
//implement linear probing in the hashtable


// class hashtable {
//   constructor() {
//     this.table = new Array(126)
//     this.size = 0
//   }
//   _hash(key) {
//     var hash = 0
//     for (var i = 0; i < key.length; i++) {
//       hash += key.charCodeAt(i)
//     }
//     return hash % this.table.length
//   }
//   set(key, value) {
//     const index = this._hash(key)
//     if (this.table[index]) {
//       let i=index+1
//       while (this.table[i % this.table.length]) {
//         if (this.table[i % this.table.length][0] === key){
//           this.table[i%this.table.length][1]=value
//           return
//         }
//         i++ 
//     }
//       this.table[i%this.table.length]=[key,value]
//   }
//     else{ 
//       this.table[index] = [key, value]
//     }
//     this.size++
//   }
//   get(key){
//     const index=this._hash(key)
//     if(this.table[index]){
//       i=index
//       while(this.table[i%this.table.length]){
//         if(this.table[i%this.table.length][0]===key){
//           return this.table[i%this.table.length][1]
//         }
//         i++
//       }
//     }
//     return undefined
//   }
//   display(){
//     this.table.forEach(element=>{
//       console.log(element)
//     })
//   }
// }
// const hh=new hashtable()
// hh.set("name","sreerag")
// hh.set("name","toure")
//  //hh.get("leo")
// hh.display()
// console.log(hh.table)






//quadratic probing in hashtable

// class hashtable{
//   constructor(){
//     this.table=new Array(126)
//     this.size=0
//   }
//   _hash(key){
//     var hash=0
//     for(var i=0;i<key.length;i++){
//       hash+=key.charCodeAt(i)
//     }
//     return hash%this.table.length
//   }
//   set(key,value){
//     const index=this._hash(key)
//     if(this.table[index]){
//      let i=1
//       while(this.table[(index+i*i)%this.table.length]){
//         i++
//       }
//       this.table[(index+i*i)%this.table.length]=[key,value]
//     }
//     else{
//       this.table[index]=[key,value]
//     }
//     this.size++
//   }
//   get(key){
//     const index=this._hash(key)
//     if(this.table[index]){
//      let i=1
//       while(this.table[(index+i*i)%this.table.length]){
//         if(this.table[(index+i*i)%this.table.length][0]===key){
//           return this.table[(index+i*i)%this.table.length][1]
//         }
//         i++
//       }
//     }
//     else{
//       return undefined
//     }
//   }
//   display(){
//     this.table.forEach(element=>{
//       console.log(element)
//     })
//   }
// }
// const hh=new hashtable()
// hh.set("name","sreerag")
// hh.set("name","toure")
// // hh.get("leo")
// hh.display()
// console.log(hh.table)






//double hashing in hash table

// class hashtable{
//   constructor(){
//     this.table=new Array(100)
//     this.size=0
//   }
//   _hash(key){
//       var hash=0
//     for(var i=0;i<key.length;i++){
//       hash+=key.charCodeAt(i)
//     }
//     return hash%this.table.length
//   }
//   _doublehash(index,key){
//         const step=7-(key%7)
//           let i=1
//           while(this.table[(index+i*step)%this.table.length]){
//             if(this.table[(index+i*step)%this.table.length][0]===key){
//               return (index+i*step)%this.table.length
//             }
//             i++
//           }
//           return (index+i*step)%this.table.length    
//   } 
//   set(key,value){
//     const index=this._hash(key)
//     if(this.table[index]){
//       const newIndex=this._doublehash(index,key)
//       this.table[newIndex]=[key,value]
//     }
//     else{
//       this.table[index]=[key,value]
//     }
//     this.size++
//   }
//   get(key){
//     const index=this._hash(key)
//     if(this.table[index]){
//        let i=1
//       while(this.table[(index+i*step)%this.table.length]){
//         if(this.table[(index+i*step)%this.table.length][0]===key){
//           return this.table[(index+i*step)%this.table.length][1]
//         }
//         i++
//       }
//     }
//     return undefined
//   }
//   display(){
//     this.table.forEach(element=>{
//       console.log(element)
//     })
//   }
// }
// const hh=new hashtable()
// hh.set("name","sreerag")
// hh.set("name","toure")
// // hh.get("leo")
// hh.display()
// console.log(hh.table)