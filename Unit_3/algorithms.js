class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const head = new Leaf("headValue");
head.left = new Leaf("left1");
head.right = new Leaf("right1");
head.left.left = new Leaf("left1left");
// Add more leaves as needed

const breadth = [];
const depth = [];

function depthFirstSearch(node) {
    if (node === null) return;
    depth.push(node.value);
    depthFirstSearch(node.left);
    depthFirstSearch(node.right);
}

function breadthFirstSearch(node) {
    const queue = [node];
    while (queue.length > 0) {
        const current = queue.shift();
        breadth.push(current.value);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
}

function displayArrays() {
    depthFirstSearch(head);
    breadthFirstSearch(head);
    document.getElementById("depthArray").textContent = depth.join(", ");
    document.getElementById("breadthArray").textContent = breadth.join(", ");
}
