class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class Tree{
    constructor(array) {
        this.array = array;
        this.root = this.buildTree(this.editArray(array));

    }

    buildTree(array){

        // split array in half, split in half until only one left and one right
        // every half number is node

        if(array.length < 2){
            return array[0]
        }


        const middlePoint = Math.ceil(array.length / 2) ;
        let left = array.slice(0,middlePoint)
        let right = array.slice(middlePoint + 1)
        let node = new Node(array[middlePoint])

        if(left.length === 0){
            node.left = null;
        } else{
            node.left = this.buildTree(left);
        }


        if( right.length === 0){
            node.right = null;
        } else{
            node.right = this.buildTree(right);
        }




        return node;
    }

    editArray(array){
        let copy = array.filter((value, index) => array.indexOf(value) === index)
        copy = this.mergeSort(copy)
        return copy;
    }

    mergeSort(array){
        if (array.length <= 1) return array;

        let right = array.slice(0, (array.length / 2));
        let left = array.slice((array.length / 2));

        return this.merge(this.mergeSort(right), this.mergeSort(left))
    }

    merge(left, right) {
        let sum = [];

        while(left.length > 0 && right.length > 0){
            let smallest = left[0] > right[0] ? right.shift() : left.shift();
            sum.push(smallest);
        }
        return sum.concat(right, left)
    }



}

x = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 15]
// x = [1, 2, 3, 4]





let test = new Tree(x);
// console.log(test.array)
console.log(test.root)

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }


// prettyPrint(test.root)
