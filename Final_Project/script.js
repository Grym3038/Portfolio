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
const input = prompt("Enter a number to add to the linked list:");
const number = parseInt(input);

// Display result in the HTML
document.getElementById("output").textContent = `Added ${number} to the linked list`;

// Linked list example
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

// Add user input to the linked list
list.add(number);

// Search for a specific node
const searchInput = prompt("Enter a number to search in the linked list:");
const searchNumber = parseInt(searchInput);
const found = list.search(searchNumber);

if (found) {
    document.getElementById("output").textContent += `\nFound ${searchNumber} in the linked list`;
} else {
    document.getElementById("output").textContent += `\n${searchNumber} not found in the linked list`;
}
