function cleanArray(array) {
  array = array.sort((a, b) => a - b);
  array = array.filter((value, index) => array.indexOf(value) === index);
  return array;
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

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.array = cleanArray(array);
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
    if (value === 0 || value === undefined)
      return console.error("0, minus integers and undefined arent allowed");

    let temp = this.root;
    let previous = null;

    while (temp !== null) {
      if (temp.data === value)
        return console.error("Value exists already in the Tree");
      previous = temp;
      temp = temp.data > value ? temp.left : temp.right;
    }

    previous.data > value
      ? (previous.left = new Node(value))
      : (previous.right = new Node(value));
  }
}

const array = [84, 2, 32, 59, 36, 2, 7, 66];

testTree = new Tree(array);

prettyPrint(testTree.root);
prettyPrint(testTree.root);
