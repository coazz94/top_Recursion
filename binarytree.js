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
    const left = array.slice(0, middlePoint);
    const right = array.slice(middlePoint + 1);
    const node = new Node(array[middlePoint]);

    node.right = this.buildTree(right);
    node.left = this.buildTree(left);

    return node;
  }

  insert(value) {
    // Check if the value is 0 or undefined and return errro
    if (value === 0 || value === undefined)
      return console.error("0, minus integers and undefined arent allowed");

    let temp = this.root;
    let previous = null;

    //
    while (temp !== null) {
      if (temp.data === value)
        return console.error("Value exists already in the Tree");
      previous = temp;
      temp = temp.data > value ? temp.left : temp.right;
    }

    if (previous.data > value) {
      previous.left = new Node(value);
    } else {
      previous.right = new Node(value);
    }
  }

  delete(value) {
    // Check if the value is 0 or undefined and return errro
    if (value === 0 || value === undefined)
      return console.error("0, minus integers and undefined arent allowed");

    let temp = this.root;
    let previous = null;

    while (temp !== null) {
      if (temp.data === value) break;
      previous = temp;
      temp = temp.data > value ? temp.left : temp.right;
    }

    if (previous.data > value) {
      previous.left = null;
    } else {
      previous.right = null;
    }
  }

  find(value) {
    // Check if the value is 0 or undefined and return errro
    if (value === 0 || value === undefined)
      return console.error("0, minus integers and undefined arent allowed");

    let temp = this.root;
    let previous = null;

    while (temp !== null) {
      if (temp.data === value) break;
      previous = temp;
      temp = temp.data > value ? temp.left : temp.right;
    }

    return temp;
  }

  leveOrder(root){
    // add root.data to array, go left and right, save left than right, continue
    if (root === null) return [];
    if (root.left === null) return [];

    // return [root.data].concat(this.leveOrder(root.left), this.leveOrder(root.right));
    return [root.data, root.left.data, root.right.data].concat(this.leveOrder(root.left), this.leveOrder(root.right))
  }


  test(root){
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

function prettyPrint(node, prefix = "", isLeft = true) {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

let x = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 15];
let test = new Tree(x);

prettyPrint(test.root);


console.log(test.test(test.root))