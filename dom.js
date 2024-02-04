
document.addEventListener("DOMContentLoaded", function() {

        var containerDiv = document.getElementById('container');
        var button = document.createElement('button');
        button.textContent = 'Toggle Colors';

        // Step 6: Utilize a loop to add new paragraphs to the container
        for (var i = 0; i < 5; i++) {
            // a. Create a new <p> element with some text
            var newParagraph = document.createElement('p');
            newParagraph.textContent = 'This is paragraph ' + (i + 1);

            // b. Place the <p> element inside the container div
            containerDiv.appendChild(newParagraph);
        }

        // Set initial state (colors)
            var isColorSet1 = true;

            // Function to toggle colors
            function toggleColors() {
                if (isColorSet1) {
                    document.body.style.backgroundColor = '#4285f4';
                    containerDiv.style.backgroundColor = '#fff';
                    containerDiv.style.color = '#333';
                } else {
                    document.body.style.backgroundColor = '#f0f0f0';
                    containerDiv.style.backgroundColor = '#fff';
                    containerDiv.style.color = '#333';
                }

                isColorSet1 = !isColorSet1;
            }

            // Attach the toggleColors function to the button click event
            button.onclick = toggleColors;

            // Append the button to the container div
            containerDiv.appendChild(button);
        });