// import doublyLinkedList from  'doublyLinkedList';

const doublyLinkedList = require("./doublyLinkedList");
const DLL = new doublyLinkedList();

function printLinkedList(list) {
  let temp = list.head;

  while (temp) {
    console.log(temp, "\n");
    temp = temp.next;
  }
}
DLL.push(3);
DLL.push(6);
DLL.push(5);
DLL.push(2);
DLL.push(9);
DLL.push(12);
DLL.push(1);
console.log(DLL,"\n");
DLL.pop();
DLL.shift();
console.log(DLL,"\n");
console.log(DLL.get(4),"\n");
console.log(DLL.get(-5),"\n");
console.log(DLL.get(20),"\n");
DLL.set(2, 30);
DLL.insert(3, 100);
DLL.insert(0, 100);
DLL.remove(3);
DLL.remove(0);
DLL.remove(13);

printLinkedList(DLL);
