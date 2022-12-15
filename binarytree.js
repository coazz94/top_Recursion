class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class Tree {
    constructor(array) {
      this.array = mergeSort(removeDuplicates(array));
      this.root = this.buildTree(this.array);
    }

    buildTree(array) {
      if (array.length < 1) return null;

      const middlePoint = Math.floor((array.length - 1) / 2);
      const right = array.slice(0, middlePoint);
      const left = array.slice(middlePoint + 1);
      const node = new Node(array[middlePoint]);

      node.right = this.buildTree(right);
      node.left = this.buildTree(left);

      return node;
    }

    insert(value){
        // moves to the side where it is smaller
        // insert 50, node = 8 also recht, node = 100 also links

        while(node.left || node.right)


    }
  }

  function removeDuplicates(array) {
    return array.filter((value, index) => array.indexOf(value) === index);
  }

  function mergeSort(array) {
    if (array.length <= 1) return array;

    let right = array.slice(0, array.length / 2);
    let left = array.slice(array.length / 2);

    return merge(mergeSort(right), mergeSort(left));
  }

  function merge(left, right) {
    let sum = [];

    while (left.length > 0 && right.length > 0) {
      let smallest = left[0] > right[0] ? right.shift() : left.shift();
      sum.push(smallest);
    }
    return sum.concat(right, left);
  }






  let x = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 15];

  let test = new Tree(x);

  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  prettyPrint(test.root);

