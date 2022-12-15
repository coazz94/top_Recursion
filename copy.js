class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class Tree {
    constructor(array) {
      this.array = [...removeDuplicates(mergeSort(array))];
      this.root = this.buildTree(this.array, 0, this.array.length - 1);
      this.preorderData = [];
      this.inorderData = [];
      this.postorderData = [];
    }

    buildTree(array, start, end) {
      if (start > end) return null;

      let mid = parseInt((start + end) / 2);
      let root = new Node(array[mid]);

      root.left = this.buildTree(array, start, mid - 1);
      root.right = this.buildTree(array, mid + 1, end);

      return root;
    }

    insert(value, root = this.root) {
      if (root == null) {
        return (root = new Node(value));
      }

      if (root.data < value) {
        root.right = this.insert(value, root.right);
      } else {
        root.left = this.insert(value, root.left);
      }

      return root;
    }

    traverse(root, array) {
      if (array !== undefined) array.push(root.data);
      if (root.left !== null) {
        this.traverse(root.left, array);
      }

      if (root.right !== null) {
        this.traverse(root.right, array);
      }
      return array;
    }

    find(value, root = this.root) {
      if (root == null) return false;

      if (root.data == value) return root;

      if (root.data > value) {
        return this.find(value, root.left);
      } else if (root.data < value) {
        return this.find(value, root.right);
      }

      return root;
    }

    delete(value, root = this.root) {
      if (root == null) {
        return root;
      }

      if (root.data > value) {
        root.left = this.delete(value, root.left);
      } else if (root.data < value) {
        root.right = this.delete(value, root.right);
      } else {
        if (root.left == null) {
          return root.right;
        } else if (root.right == null) {
          return root.left;
        }
        root.data = minValue(root);
        root.right = this.delete(root.right, root.data);
      }

      return root;
    }

    levelOrder(root) {
      const queue = [];
      const result = [];

      if (root == null) return;

      queue.push(root);

      while (queue.length > 0) {
        let current = queue.shift(root);
        result.push(current.data);

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
      }

      return result;
    }

    preorder(root) {
      if (root == null) return;

      if (root.data !== undefined) {
        this.preorderData.push(root.data);
      }

      if (root.left !== null) {
        this.preorder(root.left);
      }

      if (root.right !== null) {
        this.preorder(root.right);
      }
    }

    inorder(root) {
      if (root == null) return;

      if (root.left !== null) {
        this.inorder(root.left);
      }

      if (root.data !== undefined) {
        this.inorderData.push(root.data);
      }

      if (root.right !== null) {
        this.inorder(root.right);
      }
    }

    postorder(root) {
      if (root == null) return;

      if (root.left !== null) {
        this.postorder(root.left);
      }

      if (root.right !== null) {
        this.postorder(root.right);
      }

      if (root.data !== undefined) this.postorderData.push(root.data);
    }

    height(root) {
      if (root == null) {
        return -1;
      } else {
        let left = this.height(root.left);
        let right = this.height(root.right);

        return Math.max(left, right) + 1;
      }
    }

    depth(node, root = this.root) {
      let depth = -1;

      if (node == null) return depth;

      if (
        root == node ||
        (depth = this.depth(node, root.left)) >= 0 ||
        (depth = this.depth(node, root.right) >= 0)
      ) {
        return depth + 1;
      }

      return depth;
    }

    isBalanced(root) {
      if (root == null) return false;

      let leftHalf = root.left;
      let rightHalf = root.right;

      if (Math.abs(this.height(leftHalf) - this.height(rightHalf)) > 1) {
        return false;
      } else {
        return true;
      }
    }

    rebalance() {
      if (this.isBalanced(this.root)) return this.root;

      let rebalancedNewTreeArray = [];
      rebalancedNewTreeArray = this.traverse(this.root, rebalancedNewTreeArray);

      let balancedTree = new Tree(rebalancedNewTreeArray);

      return balancedTree.root;
    }
  }

  function minValue(root) {
    let min = root.data;
    while (root != null) {
      min = root.data;
      root = root.left;
    }
    return min;
  }

  function mergeSort(array) {
    if (array.length == 1) return array;

    const newArray = [];

    const left = mergeSort(array.slice(0, array.length / 2));
    const right = mergeSort(array.slice(array.length / 2));

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        newArray.push(left.shift());
      } else {
        newArray.push(right.shift());
      }
    }

    return [...newArray, ...left, ...right];
  }

  function removeDuplicates(array) {
    return [...new Set(array)];
  }

//   export { Tree };


x = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 15]
let test = new Tree(x);

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

prettyPrint(test.root)