const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  root() {
    return this.root;
  }

  add(data) {
    this.root = addData(this.root, data);
    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasElement(this.node, data);

    function hasElement(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      } else {
        if (data < node.data) {
          return hasElement(node.left, data);
        } else {
          return hasElement(node.right, data);
        }
      }
    }
  }

  find(data) {
    return findElement(this.node, data);
    function findElement(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      } else {
        if (data < node.data) {
          return findElement(node.left, data);
        } else {
          return findElement(node.right, data);
        }
      }
    }
  }

  remove(data) {
    this.node =removeElement(this.node, data)

    function removeElement(node, data){
      if (!node) {
        return node
      }else{
        if(data<node.data){
          node.left = removeElement(node.left,data)
          return node
        }
        if (data>node.data) {
          node.right = removeElement(node.right, data)
          return node
        }

if (data === node.data) {
  if(!node.left && !node.right){
    return null
  }else if (!node.left) {
    node = node.right
    return node
  }else if (!node.right) {
    node = node.left
    return node
  }
  else{
    let nodeRight = node.right
    while(nodeRight.left){
      nodeRight = nodeRight.left
    }
    node.data = nodeRight.data
    node.right = removeElement(node.right, nodeRight.left)
    return node
  }
}

      }
    }
  }

  min() {}

  max() {}
};
