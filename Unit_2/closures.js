function createCharacter(Name, HP, ...moves) {
    let name = Name;
    let hp = HP;
    let moveset = moves;

    return {
        getHP: function() {
            return hp;
        },
        getName: function() {
            return name;
        },
        displayMoves: function() {
            const movesDiv = document.querySelector(".moves");
            for (const move of moveset) {
                const paragraph = document.createElement("p");
                paragraph.textContent = move;
                movesDiv.appendChild(paragraph);
            }
        }
    };
}

const character = createCharacter("Character 1", 100, "Move 1", "Move 2", "Move 3");

character.displayMoves();
console.log("HP:", character.getHP());
console.log("Name:", character.getName());
