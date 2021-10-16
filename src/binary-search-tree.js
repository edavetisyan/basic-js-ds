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
    this.root= addData(this.root,data)
    function addData(node, data){
      if(!node){
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      if (data<node.data) {
        node.left = addData(node.left, data)
      }else{
        node.right = addData(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return hasElement(this.node, data)

    function hasElement(node, data){
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      else{
        if(data < node.data){
          return hasElement(node.left, data)
        }
        else{
          return hasElement(node.right, data)
        }
      }
    }
  }

  find(data) {}

  remove(data) {}

  min() {}

  max() {}
};
