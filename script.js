document.getElementById('generate-button').addEventListener('click', function() {
    // Get the text entered by the user
    const text = document.getElementById('text-input').value;

    // Get the canvas and context (this is like the 'pen' we use to draw)
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Load the background image
    const backgroundImage = new Image();
    backgroundImage.src = 'background.jpg'; // Path to your background image

    // Wait for the image to load, then draw everything
    backgroundImage.onload = function() {
        // Draw the background image onto the canvas
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // Now set up the text overlay
        ctx.font = '30px Arial';  // You can change the font size and style
        ctx.fillStyle = 'white';  // Text color
        ctx.textAlign = 'center';  // Center the text
        ctx.textBaseline = 'middle';  // Center the text vertically

        // Draw the text on the canvas
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);  // Place text in the center
    };
});
