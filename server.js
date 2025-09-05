const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/onetupskill', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for your form data
const FormSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    phone: String,
    experience: String,
    // Add other fields as needed
    course: String,
    utilities: [String]
});
const Form = mongoose.model('Form', FormSchema);

// Handle form submission
app.post('/submit', async (req, res) => {
    try {
        const form = new Form(req.body);
        await form.save();
        res.status(200).send('Form saved!');
    } catch (err) {
        res.status(500).send('Error saving form');
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));