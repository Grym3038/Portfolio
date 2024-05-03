// Linked list implementation
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let current = this.head;
        let output = "";
        while (current) {
            output += `${current.data} `;
            current = current.next;
        }
        return output;
    }
}

// Arrow function example
const multiplyByTwo = num => num * 2;

// User input/output example
const input = prompt("Enter a number:");
const number = parseInt(input);
const result = multiplyByTwo(number);

// Display result in the HTML
document.getElementById("output").textContent = `Result of doubling ${number} is ${result}`;

// Linked list example
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

document.getElementById("output").textContent += `\nLinked List: ${list.display()}`;
