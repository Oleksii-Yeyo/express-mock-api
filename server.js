const express = require('express');
const app = express();

// Mock JSON data (fake news)
const fakeNews = [
  {
    id: 1,
    title: 'Breaking News: Aliens Land on Earth!',
    content: 'Aliens have made contact with Earth in a historic event.',
  },
  {
    id: 2,
    title: 'New Study Finds Chocolate is Healthy!',
    content: 'Scientists reveal surprising health benefits of eating chocolate.',
  },
  // Add more fake news items as needed
];

// Middleware to create a delay of 1 second
app.use((req, res, next) => {
  setTimeout(next, 1000); // Emulate a delay of 1 second (1000 milliseconds)
});

// Endpoint to get fake news
app.get('/fake-news', (req, res) => {
  res.json(fakeNews);
});

// Starting the server
const PORT = 3000; // You can change the port if needed
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
