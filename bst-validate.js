
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isBST(root) {
    function isBSTHelper(node, min, max) {
      if (!node) {
        return true;
      }
      
      if (node.value <= min || node.value >= max) {
        return false;
      }
      
      return (
        isBSTHelper(node.left, min, node.value) &&
        isBSTHelper(node.right, node.value, max)
      );
    }
    
    return isBSTHelper(root, -Infinity, Infinity);
  }
  
  // Example usage:
  const root = new Node(4);
  root.left = new Node(2);
  root.right = new Node(5);
  root.left.left = new Node(1);
  root.left.right = new Node(3);
  
  console.log(isBST(root)); // Output: true
  
  // Add an invalid node to make the tree invalid
  root.right.left = new Node(3);
  console.log(isBST(root)); // Output: false
  