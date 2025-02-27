<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text to Image</title>
    <style>
        #canvas {
            border: 2px solid black;
        }
        #char-count {
            font-size: 14px;
        }
        #warning {
            color: red;
            display: none;
        }
    </style>
</head>
<body>
    <h1>Text to Image</h1>
    <input type="text" id="text-input" maxlength="350" placeholder="Enter your text (max 350 characters)">
    <p id="char-count">0/350 characters</p>
    <p id="warning">Text is too long! Limit is 350 characters.</p>
    <button id="generate-button">Generate Image</button>
    <br><br>
    <canvas id="canvas" width="1080" height="1080"></canvas>

    <script>
        // Reference to the text input and character count display
        const textInput = document.getElementById('text-input');
        const charCountDisplay = document.getElementById('char-count');
        const warningDisplay = document.getElementById('warning');
        const generateButton = document.getElementById('generate-button');

        // Function to update the character count and show warning if needed
        textInput.addEventListener('input', function() {
            const textLength = textInput.value.length;
            charCountDisplay.textContent = `${textLength}/350 characters`;

            // Show warning if more than 350 characters
            if (textLength > 350) {
                warningDisplay.style.display = 'block';
                generateButton.disabled = true;  // Disable the button
            } else {
                warningDisplay.style.display = 'none';
                generateButton.disabled = false;  // Enable the button
            }
        });

        // Handle the "Generate Image" button click
        generateButton.addEventListener('click', function() {
            const text = textInput.value;
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');

            const backgroundImage = new Image();
            backgroundImage.src = 'background.jpg';  // Replace with your background image

            backgroundImage.onload = function() {
                // Draw the background image
                ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

                // Set font size dynamically based on the text length
                let fontSize = Math.min(canvas.width / text.length * 2, 50); // Adjust text size
                ctx.font = `${fontSize}px Arial`;
                ctx.fillStyle = 'white';  // Text color
                ctx.textAlign = 'center'; // Center the text
                ctx.textBaseline = 'middle'; // Center vertically

                // Draw the text on the canvas
                ctx.fillText(text, canvas.width / 2, canvas.height / 2);
            };
        });
    </script>
</body>
</html>
