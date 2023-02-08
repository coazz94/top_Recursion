
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

function cleanArray(array) {
    array = array.sort((a, b) => a - b);
    array = array.filter((value, index) => array.indexOf(value) === index)
    return array
}


class Tree {
    constructor(array){
        this.array = cleanArray(array);
        this.root = this.buildTree(this.array);
    }

    buildTree(array){

    }


}

const array = [84, 2, 32, 59, 36, 2, 7, 66]

testTree = new Tree(array)

console.log(testTree)



