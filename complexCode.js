/*
  Filename: complexCode.js
  Description: This complex code demonstrates advanced concepts of JavaScript, using various data structures, algorithms, and design patterns.

  Note: This code is purely hypothetical and may not serve any practical purpose.

  Author: Assistance
  Date: September 2021
*/

// Custom data structure

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  addToTail(value) {
    const newNode = new LinkedListNode(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeHead() {
    if (!this.head) {
      return null;
    }

    const removedHead = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    return removedHead.value;
  }

  removeTail() {
    if (!this.tail) {
      return null;
    }

    const removedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }

      currentNode.next = null;
      this.tail = currentNode;
    }

    return removedTail.value;
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  toString() {
    let currentNode = this.head;
    let result = '';

    while (currentNode) {
      result += `${currentNode.value} -> `;
      currentNode = currentNode.next;
    }

    return result + 'null';
  }
}

// Custom algorithm

function findDuplicates(arr) {
  const duplicates = {};

  for (const value of arr) {
    if (duplicates[value]) {
      duplicates[value]++;
    } else {
      duplicates[value] = 1;
    }
  }

  return Object.entries(duplicates)
    .filter(([_, count]) => count > 1)
    .map(([value, _]) => value);
}

// Custom design pattern

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    // Add some elaborate functionality here...

    Singleton.instance = this;
  }
}

// Usage example

const linkedList = new LinkedList();

linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(2);
linkedList.addToTail(3);
linkedList.addToTail(4);
linkedList.addToHead(5);
linkedList.removeFromTail();

console.log(`Linked List: ${linkedList.toString()}`);

const duplicates = findDuplicates([1, 3, 4, 2, 2, 3, 5]);
console.log(`Duplicates: ${duplicates}`);

const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(`Singleton Instances: ${singleton1 === singleton2}`);