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
    // Check if the value is 0 or undefined and return error
    if (value === 0 || value === undefined)
      return console.error("0, minus integers and undefined arent allowed");

    let temp = this.root;
    let previous = null;

    // Bis Temp nicht null ist
    while (temp !== null) {
      // Wenn Temp value ist gleich inserted Value print error
      if (temp.data === value)
        return console.error("Value exists already in the Tree");
      // speichere temp für später
      previous = temp;
      // Ändere temp, wenn data > als gesuchte value dann geht man links anonsten recht
      temp = temp.data > value ? temp.left : temp.right;
    }

    // Check if value links oder rechts mach eine neue node und mache einen pointer auf diese node
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

    // schauen wo die zahl ist rechts oder links und elete einfach den pointer auf die Node
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

  height(value){
    if (value == null) return 0;
    else
      {
      /* compute height of each subtree */
      let lheight = this.height(value.left);
      let rheight = this.height(value.right);


      console.log(lheight, rheight, value)

      /* use the larger one */
      if (lheight > rheight)
          return (lheight + 1);
      else
        return (rheight + 1);
      }
  }

  heigth(node){
    if (node === null) {
      return 0;
    }

    let leftHeight = this.heigth(node.left);
    let rightHeight = this.heigth(node.right);


    if (leftHeight > rightHeight)
      return (leftHeight + 1);
    else
      return (rightHeight + 1);
  }


  levelOrder(root) {
    if (this.root === null) return;

    let queue = [this.root];
    let result = [];


    while(queue.length > 0){
      let temp = queue.shift();
      result.push(temp.data);

      if (temp.left !== null) queue.push(temp.left);
      if (temp.right !== null) queue.push(temp.right);


    }


    console.log(result)


  }

  inorder(node) {

    if (node === null) return ;

    this.inorder(node.left)
    this.inorder(node.right)
    console.log(node.data)
  }


}



let x = [ 84, 2, 32, 59, 36, 2, 7, 66];
let test = new Tree(x);

// prettyPrint(test.root);


console.log(test.levelOrder())