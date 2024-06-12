/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log('middleware inovcation', new Date().toLocaleTimeString());
  next();
});

app.get('/questions', (req, res) => {
  console.log('questions endpoint hit!');
  const questionsData = JSON.parse(fs.readFileSync('./data/questions.json'));
  res.status(200).json(questionsData);
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
