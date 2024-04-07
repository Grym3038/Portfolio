let myArray = [];

function update() {
    const output = document.querySelector('p');
    output.innerHTML = '';
    myArray.reduce((acc, cur, index) => {
        output.innerHTML += `${index + 1}. ${cur}<br>`;
    }, '');
}

function pushItem() {
    const input = document.querySelector('input');
    myArray.push(input.value);
    update();
    input.value = '';
}

function popItem() {
    myArray.pop();
    update();
}

function unshiftItem() {
    const input = document.querySelector('input');
    myArray.unshift(input.value);
    update();
    input.value = '';
}

function shiftItem() {
    myArray.shift();
    update();
}

function arrMap() {
    const input = document.querySelector('input');
    myArray = myArray.map(item => item + input.value);
    update();
    input.value = '';
}
