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
  
    // Insert a new node into the BST
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
  
    // Traverse the BST in pre-order
    preOrderTraversal(node = this.root) {
      if (node !== null) {
        console.log(node.data);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
      }
    }
  
    // Traverse the BST in in-order
    inOrderTraversal(node = this.root) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.data);
        this.inOrderTraversal(node.right);
      }
    }
  
    // Traverse the BST in post-order
    postOrderTraversal(node = this.root) {
      if (node !== null) {
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.data);
      }
    }
  }
  
  // Example usage:
  const bst = new BinarySearchTree();
  bst.insert(4);
  bst.insert(2);
  bst.insert(6);
  bst.insert(1);
  bst.insert(3);
  bst.insert(5);
  bst.insert(7);
  
  console.log('Pre-order traversal:');
  bst.preOrderTraversal();
  
  console.log('In-order traversal:');
  bst.inOrderTraversal();
  
  console.log('Post-order traversal:');
  bst.postOrderTraversal();
  