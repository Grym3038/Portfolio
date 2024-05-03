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

    search(data) {
        let current = this.head;
        while (current) {
            if (current.data.toLowerCase() === data.toLowerCase()) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    display() {
        let current = this.head;
        let output = "";
        while (current) {
            output += `${current.data}\n`;
            current = current.next;
        }
        return output;
    }
}

const nameList = document.getElementById("nameList");
const linkedList = new LinkedList();

// Initial names in the linked list
linkedList.add("Alice");
linkedList.add("Bob");
linkedList.add("Charlie");
linkedList.add("David");
linkedList.add("Eve");

// Display initial list of names
displayNames();

// Search button click event
document.getElementById("searchButton").addEventListener("click", function() {
    const searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput !== "") {
        const found = linkedList.search(searchInput);
        if (found) {
            alert(`${searchInput} found in the linked list`);
        } else {
            alert(`${searchInput} not found in the linked list`);
        }
        document.getElementById("searchInput").value = "";
    }
});

// Add button click event
document.getElementById("addButton").addEventListener("click", function() {
    const newName = document.getElementById("addInput").value.trim();
    if (newName !== "") {
        linkedList.add(newName);
        displayNames();
        document.getElementById("addInput").value = "";
    }
});

// Display names in the linked list
function displayNames() {
    nameList.textContent = linkedList.display();
}
