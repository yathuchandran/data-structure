class TrieNode {
    constructor() {
      this.children = {};
      this.endOfNode = false;
    }
  }
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
    insert(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.endOfNode = true;
    }
    search(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.endOfNode;
    }
  
    delete(word) {
      let node = this.root;
      const stack = [];
      // Find the node corresponding to the last character in the word
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          return false; // Word not found in trie
        }
        stack.push({ node, char });
        node = node.children[char];
      }
      if (!node.endOfNode) {
        return false; // Word not found in trie
      }
      // Mark the node as non-terminal
      node.endOfNode = false;
      // Delete nodes that are no longer needed
      while (stack.length > 0) {
        const { node, char } = stack.pop();
        if (Object.keys(node.children).length === 0 && !node.endOfNode) {
          delete node.children[char];
        } else {
          break;
        }
      }
      return true;
    }
  
    display() {
      let words = [];
      function traverse(node, word) {
        if (node.endOfNode) {
          words.push(word);
        }
        for (let char in node.children) {
          traverse(node.children[char], word + char);
        }
      }
      traverse(this.root, "");
      return words;
    }
    print() {
      console.log(this.root);
    }
  }
  let tri = new Trie();
  tri.insert("yathish");
  tri.insert("world");
  
  console.log(tri.search("yathish")); // true
  
  console.log(tri.delete("yathish")); // true
  
  console.log(tri.display());
  tri.print();
  