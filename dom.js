
        // Step 5: Create a new variable for the container div
        var containerDiv = document.getElementById('container');

        // Step 6: Utilize a loop to add new paragraphs to the container
        for (var i = 0; i < 5; i++) {
            // a. Create a new <p> element with some text
            var newParagraph = document.createElement('p');
            newParagraph.textContent = 'This is paragraph ' + (i + 1);

            // b. Place the <p> element inside the container div
            containerDiv.appendChild(newParagraph);
        }

        // Step 7: Create a function to change background colors
        function changeColors() {
            document.body.style.backgroundColor = '#b0e57c'; // Set your preferred body background color
            containerDiv.style.backgroundColor = '#4285f4'; // Set your preferred container background color
            containerDiv.style.color = '#fff'; // Set your preferred text color
        }

        // Step 8: Create a button with onclick attribute
        var button = document.createElement('button');
        button.textContent = 'Change Colors';
        button.onclick = changeColors;

        // Append the button to the container div
        containerDiv.appendChild(button);
