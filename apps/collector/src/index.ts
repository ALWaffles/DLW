import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route for data collection
app.post('/api/collect', (req, res) => {
    const { usageData } = req.body;
    // Here you would handle the incoming usage data
    console.log('Received usage data:', usageData);
    res.status(200).send({ message: 'Data collected successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Collector app is running on http://localhost:${PORT}`);
});