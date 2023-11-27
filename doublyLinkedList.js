// import {Node} from './node';
const Node = require("./node");
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    //add the new node to the end of the linked list
    const newNode = new Node(val);

    if (!this.head) {
      //check if the head is empty then it will ad the new node as the head (the head and the tail are point to the new node)
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if the linked list is not empty then add the new node as the tail by :
      this.tail.next = newNode; //make the old value of the tail => tail.next point to the new node
      newNode.prev = this.tail; // make the prev of the new node to be the old tail value
      this.tail = newNode; //assign the tail with new value that is the new node
    }
    console.log("the list has been updated","\n");
    this.length++; //update the length of the list
  }

  pop() {
    //delete the last node in the linked list
    if (this.head) {
      // if there is node or more in the linked list then:
      if (this.tail.prev) {
        //if there is more than one node in the linked list then: (or it can be if (this.tail===this.head))
        this.tail.prev.next = null; //make the prev next of the tail to point to null
        this.tail = this.tail.prev; //make the new value of the tail be the prev node of the old tail value
      } else {
        // if there just one node in the linked list then:
        this.head = null; //make the head new value equal null
        this.tail = null; // make the tail new value equal null
      }
      console.log("the last node has been deleted and the list is updated","\n");
      this.length--; //update the length of the list
    } else {
      console.error("the list is empty","\n");
    }
  }

  shift() {
    //remove the head of the linked list
    if (this.head) {
      //check if the linked list is not empty (have head)
      if (this.head.next) {
        //check if the head is the only node of the linked list or not
        // if the linked list has more than one node then:
        this.head.next.prev = null; //make the next node of the head its prev be equal null
        this.head = this.head.next; //assign the head with the new value that is the value of the next node of the old head value
      } else {
        // if there just one node in the linked list then:
        this.head = null; //make the head new value equal null
        this.tail = null; // make the tail new value equal null
      }
      console.log(
        "the head of the list has been deleted and the list is updated","\n"
      );
      this.length--; //update the length of the list
    } else {
      console.error("the list is empty","\n");
    }
  }

  unshift(val) {
    //assign a new value for the head
    const newNode = new Node(val); //create a new head with the new value

    if (this.head) {
      //check if the head already exists
      this.head.prev = newNode; //assign a value for the old head prev
      newNode.next = this.head; //make the next of the new node be equal to the old head
      this.head = newNode; //assign the new value of the head
    } else {
      //if the head is empty then it will ad the new node as the head (the head and the tail are point to the new node)

      this.head = newNode;
      this.tail = newNode;
    }
    this.length++; //update the length of the list
    console.log(
      "the head of the list has been updated and the list is updated","\n"
    );
  }

  get(index) {
    //get the value that on the position == index
    if (index < 0 || index >= this.length) {
      //check if the index is negative or (grater than or equal to) the length of the linked list then:
      console.error("Invalid index","\n"); //throw an error and return
      return false;
    }
    if (this.head) {
      //if the list has nodes then:
      let res = 0;
      let temp = this.head;
      //keep looping until its arrive to the wanted index
      while (res != index) {
        temp = temp.next;
        res++;
      }
      //return the value
      return temp.value;
    }
  }

  set(index, value) {
    //set a new value of the position == index
    if (index < 0 || index >= this.length) {
      //check if the index is negative or (grater than or equal to) the length of the linked list then:
      console.error("Invalid index","\n"); //throw an error and return
      return false;
    }
    if (this.head) {
      //if the list has nodes then:
      let res = 0;
      let temp = this.head;
      while (res != index) {
        //keep looping until its arrive to the wanted index
        temp = temp.next;
        res++;
      }
      //updated the wanted node with new value
      temp.value = value;
      console.log("list has been updated","\n");
    }
  }

  insert(index, value) {
    //insert a new node at the given index

    if (index < 0 || index > this.length) {
      //check if the index is negative or grater than the length of the linked list then:
      console.error("Invalid index, insert process failed","\n"); //throw an error and return
      return false;
    }
  
    if (this.head) {
      if (index === 0) {
        //if the index is equal 0 that mean that the head will be changed so use the method unshift()
        this.unshift(value);
        return true;
      }
      if (index === this.length) {
        // if hthe index is equal to the length of the linked list then it mean that will be insert in the end of the list so use the method push()
        this.push(value);
        return true;
      }
      const newNode = new Node(value); //create a new node
      let res = 0;
      let temp = this.head;
      while (res != index) {
        //keep looping until its arrive to the wanted index
        temp = temp.next;
        res++;
      }

      //updated the list by:
      newNode.prev = temp.prev; //set the prev node value of the newNode be equal to the node at the current index
      temp.prev.next = newNode; //update the next node value of the prev node of the node at the current index to be equal to the newNode
      temp.prev = newNode; //update the prev node value of the node at the current index node to be equal to the newNode
      newNode.next = temp; //set the next node value of the newNode to be equal the node at the current index
      this.length++; //update the length of the list
      console.log("insert process success","\n");
      return true;
    }
    else{
      console.error("the list is empty","\n");
      return false;
    }
  }

  remove(index) {
    //delete the node at the given index
    if (index < 0 || index >= this.length) {
      //check if the index is negative or grater than the length of the linked list then:
      console.error("Invalid index","\n"); //throw an error and return
      return false;
    }
    if (this.head) {
      // check if the list is not empty then:
      if (index === 0) {
        //check if the index is equal 0 that means that the node that will be deleted is the head so use the method shift
        this.shift();
        return true;
      }
      let res = 0;
      let temp = this.head;
      while (res != index) {
        //keep looping until its arrive to the wanted index
        temp = temp.next;
        res++;
      }
      //update the value of the prev and next nodes pointers of the node that will be deleted
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      this.length--; //update the length of the list
      console.log("the node has been removed","\n");

    }
  }
}

module.exports = DoublyLinkedList;
