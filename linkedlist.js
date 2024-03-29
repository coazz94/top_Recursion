class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }

  class LinkedList {
    constructor(headnode) {
      this.Head = headnode;
      this.Head.nextNode = null;
    }

    // Add to the begin of the liked list
    append(value) {
      // make a new node
      const newNode = new Node(value);
      let temp = this.Head;

      //search a empty pointer (last node)
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      // the next node is the new node
      temp.nextNode = newNode;
    }
    // Add to the end of the linked list
    prepend(value) {
      // Find the first node
      const nextNode = this.Head.nextNode;
      const newNode = new Node(value);
      // add to the first node the new node and save the previous chain to the new node
      this.Head.nextNode = newNode;
      this.Head.nextNode.nextNode = nextNode;
    }
    // return the size of the linked list
    size() {
      // make a counter
      let counter = 0;
      let temp = this.Head;
      // check until the next node is null, add to the counter everytime it is not null
      while (temp.nextNode != null) {
        temp = temp.nextNode;
        counter++;
      }
      return counter;
    }
    // return the first element in the list
    head() {
      // return the first element
      return this.Head.nextNode;
    }
    // return the last element in the list
    tail() {
      let temp = this.Head,
        nextNode;
      // serach the empty pointer and return this node (last)
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }

      return temp;
    }
    // return the element at index x
    at(index) {
      // check if the index is not bigger than the size
      if (!this.checkLength(index)) return null;

      let temp = this.Head;
      let counter = 0;
      // go through the list, when counter is index then break and return the node
      while (temp.nextNode != null) {
        counter++;
        temp = temp.nextNode;
        if (counter === index + 1) {
          break;
        }
      }
      return temp;
    }
    // delete the last item
    pop() {
      // find the size and remove the next node at the last item
      const size = this.size() - 2;
      this.at(size).nextNode = null;
    }
    // check if value is in the list
    contains(value) {
      let temp = this.Head.nextNode;
      const size = this.size();
      // check if the value is the searched value
      for (let i = 0; i < size; i++) {
        if (temp.value === value) return true;
        temp = temp.nextNode;
      }
      return false;
    }
    // find the vlaue in the list
    find(value) {
      let temp = this.Head.nextNode;
      const size = this.size();

      for (let i = 0; i < size; i++) {
        if (temp.value === value) return i;
        temp = temp.nextNode;
      }
      return null;
    }
    // display nodes as string
    toString() {
      let temp = this.Head.nextNode;
      let string = "";
      const size = this.size();

      // add all the nodes to the string
      for (let i = 0; i < size; i++) {
        let addString = `(${temp.value}) --> `;
        string = string + addString;
        temp = temp.nextNode;
      }
      // add null for the last node and return it
      string = string + "(null)";
      return string;
    }
    // insert at index the value x
    insertAt(value, index) {
      let temp = this.Head;
      const newNode = new Node(value);
      let nextInLine = null;

      if (index === 0 || index === this.size() + 1) {
        console.log(
          "Please use the append function to add to the begining of the liked list"
        );
        return;
      }
      // check if the index is bigger than the size of the list
      this.checkLength(index);

      for (let i = 0; i < index; i++) {
        temp = temp.nextNode;
        nextInLine = temp.nextNode;
      }
      temp.nextNode = newNode;
      temp.nextNode.nextNode = nextInLine;
    }
    // remove at index
    removeAt(index) {
      let temp = this.Head;
      let nextInLine = null;
      let onebefore = null;
      let counter = 0;

      if (!this.checkLength(index)) return null;

      while (counter != index + 1) {
        onebefore = temp;
        temp = temp.nextNode;
        nextInLine = temp.nextNode;
        counter++;
      }
      onebefore.nextNode = nextInLine;
    }
    // function to support the others, checking if the index is bigger then the actual size of the list
    checkLength(index) {
      if (this.size() <= index) {
        console.log("size exceedes size of list");
        return false;
      }
      return true;
    }
  }





