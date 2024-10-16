const express = require('express');
const path = require('path');
const cors = require('cors'); // Use CORS if needed
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS only if serving from different domains
app.use(cors());

// Serve static files from the 'public' folder (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submissions
app.post('/submit-order', (req, res) => {
    const { name, dish } = req.body;

    // Respond with the submitted order details
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
