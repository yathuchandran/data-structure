// class Node {
//     constructor(data) {
//         this.value = data
//         this.left = null
//         this.right = null
//     }
// }
// class BST {
//     constructor() {
//         this.root = null
//     }
//     insert(value) {  //INSERT NODE-----------
//         let newNode = new Node(value)
//         if (!this.root) {
//             this.root = newNode
//         }
//         else {
//             let node = this.root
//             while (true) {
//                 if (value < node.value) {
//                     if (!node.left) {
//                         node.left = newNode
//                         break;
//                     }
//                     node = node.left
//                 }
//                 else {
//                     if (!node.right) {
//                         node.right = newNode
//                         break
//                     }
//                     node = node.right
//                 }}}}


//     search(value) {
//         let current = this.root;
//         while (current !== null) {
//           if (value === current.value) {
//             return true;
//           } else if (value < current.value) {
//             current = current.left;
//           } else {
//             current = current.right;
//           }
//         }
//         return false;
//       }



//     //DELETE NODE--------------------------------------

//     delete(value) {
//         const removeNode = (node, value) => {
//             if (node === null) {
//                 return null;
//             }
//             if (value === node.value) {
//                 if (node.left === null && node.right === null) {
//                     return null;
//                 }
//                 if (node.left === null) {
//                     return node.right;
//                 }
//                 if (node.right === null) {
//                     return node.left;
//                 }
//                 let temp = node.right;
//                 while (temp.left !== null) {
//                     temp = temp.left;
//                 }
//                 node.value = temp.value;
//                 node.right = removeNode(node.right, temp.value);
//                 return node;
//             } else if (value < node.value) {
//                 node.left = removeNode(node.left, value);
//                 return node;
//             } else {
//                 node.right = removeNode(node.right, value);
//                 return node;
//             }
//         }
//         this.root = removeNode(this.root, value);
//     }


//     //BST-FINDclosest--------------------------------
//     findClosest(value) {
//         let current = this.root;
//         let closest = current.value;
//         while (current !== null) {
//           if (current.value - value < closest - value) {
//             closest = current.value;
//           }
//           if (value === current.value) {
//             break;
//           } else if (value < current.value) {
//             current = current.left;
//           } else {
//             current = current.right;
//           }
//         }
//         return closest;
//       }
//     }
// //-----RESULT-------------------------------------------
// const bst = new BST()

// bst.insert(12)
// bst.insert(32)
// bst.insert(43)
// bst.insert(10)

// bst.insert(5)
// console.log(bst.search(5)); 
// console.log(bst.findClosest(4))

// bst.delete(32)
// console.log(bst.root);






// class Node {
//     constructor(data) {
//       this.value = data;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BST {
//     constructor() {
//       this.root = null;
//     }
  
//     // INSERT NODE
//     insert(value) {
//       let newNode = new Node(value);
//       if (!this.root) {
//         this.root = newNode;
//       } else {
//         let node = this.root;
//         while (true) {
//           if (value < node.value) {
//             if (!node.left) {
//               node.left = newNode;
//               break;
//             }
//             node = node.left;
//           } else {
//             if (!node.right) {
//               node.right = newNode;
//               break;
//             }
//             node = node.right;
//           }
//         }
//       }
//     }
  
//     // PREORDER TRAVERSAL
//     preorder(node = this.root) {
//       if (node) {
//         console.log(node.value);
//         this.preorder(node.left);
//         this.preorder(node.right);
//       }  }
//     // INORDER TRAVERSAL
//     inorder(node = this.root) {
//       if (node) {
//         this.inorder(node.left);
//         console.log(node.value);
//         this.inorder(node.right);
//       }  }
//     // POSTORDER TRAVERSAL
//     postorder(node = this.root) {
//       if (node) {
//         this.postorder(node.left);
//         this.postorder(node.right);
//         console.log(node.value);
//       }  } }
//   let bst = new BST();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// console.log("Preorder Traversal:");
// bst.preorder();
// console.log("Inorder Traversal:");
// bst.inorder();
// console.log("Postorder Traversal:");
// bst.postorder();




// class Node {
//     constructor(data) {
//       this.value = data;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function isBST(node, min = Number.MIN, max = Number.MAX) {
//     if (!node) {
//       return true;
//     }
//     if (node.value <= min || node.value >= max) {
//       return false;
//     }
//     return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
//   }
  
//   // Sample usage:
//   const root = new Node(4);
//   root.left = new Node(2);
//   root.right = new Node(6);
//   root.left.left = new Node(1);
//   root.left.right = new Node(3);
//   root.right.left = new Node(5);
//   root.right.right = new Node(7);
//   console.log(isBST(root)); // true


// class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BST {
//     constructor() {
//       this.root = null;
//     }
  
//     insert(value) {
//       let newNode = new Node(value);
//       if (!this.root) {
//         this.root = newNode;
//       } else {
//         let node = this.root;
//         while (true) {
//           if (value < node.value) {
//             if (!node.left) {
//               node.left = newNode;
//               break;
//             }
//             node = node.left;
//           } else {
//             if (!node.right) {
//               node.right = newNode;
//               break;
//             }
//             node = node.right;
//           }
//         }
//       }
//     }
  
//     height() {
//       if (!this.root) {
//         return 0;
//       }
//       return this._height(this.root);
//     }
  
//     _height(node) {
//       if (!node) {
//         return 0;
//       }
//       let leftHeight = this._height(node.left);
//       let rightHeight = this._height(node.right);
//       return Math.max(leftHeight, rightHeight) + 1;
//     }
// }
//   let bst = new BST();
// bst.insert(5);
// bst.insert(3);
// bst.insert(8);
// bst.insert(2);
// bst.insert(4);
// bst.insert(7);
// bst.insert(9);
// console.log(bst.height()); // output: 3



//     depth(value) {
//       if (!this.root) {
//         return 0;
//       }
//       return this._depth(value, this.root, 1);
//     }
//     _depth(value, node, level) {
//       if (!node) {
//         return 0;
//       }
//       if (node.value === value) {
//         return level;
//       }
//       let leftDepth = this._depth(value, node.left, level + 1);
//       let rightDepth = this._depth(value, node.right, level + 1);
//       if (leftDepth !== 0 && rightDepth !== 0) {
//         return Math.min(leftDepth, rightDepth);
//       }
//       return leftDepth + rightDepth;
//     }
//   }
//   let bst = new BST();
// bst.insert(5);
// bst.insert(3);
// bst.insert(8);
// bst.insert(2);
// bst.insert(4);
// bst.insert(7);
// bst.insert(9);
// console.log(bst.depth(7)); // output: 2







class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      let newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        let node = this.root;
        while (true) {
          if (value < node.value) {
            if (!node.left) {
              node.left = newNode;
              break;
            }
            node = node.left;
          } else {
            if (!node.right) {
              node.right = newNode;
              break;
            }
            node = node.right;
          }
        }
      }
    }


    maxvalue(){
        let node =this.root
        while(node.right !=null){
            node = node.right
        }
        console.log(node.value)
    }
}

const bst = new BST()

bst.insert(12)
bst.insert(32)
bst.insert(43)
bst.insert(10)

console.log(bst.root);

bst.maxvalue()