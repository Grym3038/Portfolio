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

    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

// Arrow function example
const multiplyByTwo = num => num * 2;

// User input/output example
const outputDiv = document.getElementById("output");

// Linked list example
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

// Display linked list
outputDiv.textContent = `Linked List: ${list.display()}`;

// Add button event listeners
document.getElementById("addButton").addEventListener("click", function() {
    const input = prompt("Enter a number to add to the linked list:");
    const number = parseInt(input);
    list.add(number);
    outputDiv.textContent = `Added ${number} to the linked list\nLinked List: ${list.display()}`;
});

document.getElementById("searchButton").addEventListener("click", function() {
    const input = prompt("Enter a number to search in the linked list:");
    const number = parseInt(input);
    const found = list.search(number);
    if (found) {
        outputDiv.textContent = `${number} found in the linked list\nLinked List: ${list.display()}`;
    } else {
        outputDiv.textContent = `${number} not found in the linked list\nLinked List: ${list.display()}`;
    }
});
