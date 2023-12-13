import express from "express";
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Mock JSON data (fake news)
import fakeNews from "./data/mock-data-face-news.js";

// Middleware to create a delay of 1 second
// app.use((req, res, next) => {
//   setTimeout(next, 1e3); // Emulate a delay of 1 second (1000 milliseconds)
// });

app.use(cors());

app.get('/image/:id', (req, res) => {
  const { id } = req.params;
  const newsId = parseInt(id);
  // const imagePath = './data/images/img-00.jpg'; // Relative path to the image
  // const absolutePath = path.resolve(imagePath); // Resolving the absolute path
  const relativeImagePath = path.join(__dirname, 'data', 'images', `img-${newsId}.jpg`);
  // console.log(__dirname);
  
  res.sendFile(relativeImagePath);
});

// Endpoint to get one fake news with id;
app.get("/fake-news/:id", (req, res) => {
  // const id = +req.url.split('/').at(-1);
  const { id } = req.params;
  const newsId = parseInt(id);
  // console.log(id);
  fakeNews[newsId - 1] ?  res.json([fakeNews[newsId - 1]]) :
  res.status(404).json({ error: 'News not found' });
});

// Endpoint to get fake news
app.get("/fake-news", (req, res) => {
  res.json(fakeNews);
});

// Starting the server
const PORT = 3000; // You can change the port if needed
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
