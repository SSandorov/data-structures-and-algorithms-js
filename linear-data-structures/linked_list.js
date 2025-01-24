//* JS doesn't have a built-in list, but it is created the following way:

/**
 * Linked List Node
 */
class Node {
    constructor(value = null) {
      this.value = value;
      this.next = null;
      this.previous = null; // if doubly linked list
    }
}

//? Linked lists patterns for Interview Questions
