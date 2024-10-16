const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the 'public' folder (your HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submissions
app.post('/submit-order', (req, res) => {
    const { name, dish } = req.body;

    // Ensure the response is JSON
    res.json({
        name,
        dish
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
