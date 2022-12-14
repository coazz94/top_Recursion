class LinkedList {
    constructor(headnode) {
        this.Head = headnode;
        this.Head.nextNode = null;
    }

    append(value){
        const newNode = new Node(value);
        let temp = this.Head;

        while(temp.nextNode != null){
            temp = temp.nextNode;
        }
        temp.nextNode = newNode;
    }

    prepend(value){
        let temp = this.Head;
        const nextNode = temp.nextNode;
        const newNode = new Node(value);
        temp.nextNode = newNode;
        temp.nextNode.nextNode = nextNode;
    }

    size(){
        let counter = 0;
        let temp = this.Head;
        while(temp.nextNode != null){
            temp = temp.nextNode;
            counter++;
        }
        return counter
    }   

    head(){
        return this.Head.nextNode;
    }

    tail(){
        let temp = this.Head;

        while(temp.nextNode != null){
            temp = temp.nextNode;
        }

        return temp;
    }

    at(index){
        if (this.size() <= index) {
            return console.error("Indeex to big");
        };
        let temp = this.Head;
        let counter = 0;
        while(temp.nextNode != null){
            counter++;
            temp = temp.nextNode;
            if (counter === index + 1){
                break;
            }
        }

        return temp;

    }

    pop(){
        const size = this.size() - 2;
        this.at(size).nextNode = null;
        }

    contains(value){
        let temp = this.Head.nextNode;
        const size = this.size()

        for (let i = 0; i < size; i++){
            if(temp.value === value) return true;
            temp = temp.nextNode;
        }
    return false;
    }

    find(value){
        let temp = this.Head.nextNode;
        const size = this.size();

        for (let i = 0; i < size; i++){
            if(temp.value === value) return i;
            temp = temp.nextNode;
        }
    return null;
    }
    
    toString(){
        let temp = this.Head.nextNode;
        let string = "";
        const size = this.size();

        for (let i = 0; i < size; i++){
            let addString = `(${temp.value}) --> `
            string = string + addString;
            temp = temp.nextNode;
        }

        string = string + "(null)"
        return string;

    }

    insertAt(value, index){
        let temp = this.Head.nextNode;
        let counter = 1;
        const newNode = new Node(value);
        let nextInLine = null;
        const size = this.size()

        if (index > size){
            return console.error("Indeex to big");
        }

        while(counter != index){
            temp = temp.nextNode;
            nextInLine = temp.nextNode;
            counter++;
        }

        temp.nextNode = newNode;
        temp.nextNode.nextNode = nextInLine;
    }




}


class Node {
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

let Head = new Node("Head")
test = new LinkedList(Head)

test.append(1)
test.append(2)
test.append("last")
test.prepend(10)

console.log(test.toString())
test.insertAt("hey",2)
console.log(test.toString())