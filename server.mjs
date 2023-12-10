import express from 'express';
const app = express();

// Mock JSON data (fake news)
import fakeNews from './data/mock-data-face-news.js';

// Middleware to create a delay of 1 second
// app.use((req, res, next) => {
//   setTimeout(next, 1e3); // Emulate a delay of 1 second (1000 milliseconds)
// });

// Endpoint to get fake news
app.get('/fake-news', (req, res) => {
  res.json(fakeNews);
});

// Starting the server
const PORT = 3000; // You can change the port if needed
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
