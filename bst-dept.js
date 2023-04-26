class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    getHeight() {
      return this.calculateHeight(this.root);
    }
  
    calculateHeight(node) {
      if (node === null) {
        return 0;
      } else {
        const leftHeight = this.calculateHeight(node.left);
        const rightHeight = this.calculateHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
      }
    }
  
    getDepth(node) {
      return this.calculateDepth(this.root, node);
    }
  
    calculateDepth(root, node) {
      if (root === null) {
        return 0;
      } else if (root === node) {
        return 1;
      } else {
        const leftDepth = this.calculateDepth(root.left, node);
        const rightDepth = this.calculateDepth(root.right, node);
        if (leftDepth !== 0) {
          return leftDepth + 1;
        } else if (rightDepth !== 0) {
          return rightDepth + 1;
        } else {
          return 0;
        }
      }
    }
  }
  
  const bst = new BinarySearchTree();
  bst.insert(50);
  bst.insert(30);
  bst.insert(20);
  bst.insert(40);
  bst.insert(70);
  bst.insert(60);
  bst.insert(80);
  
  console.log("Height of BST:", bst.getHeight()); // Output: 3
  console.log("Depth of node with value 40:", bst.getDepth(bst.root.left.right)); // Output: 2
  