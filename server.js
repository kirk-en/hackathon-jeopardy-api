/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
import fs from "fs";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log("middleware inovcation", new Date().toLocaleTimeString());
  next();
});

const genQuestionSet = (questionsArr, categoryCount) => {
  if (categoryCount > questionsArr.length) {
    console.log(
      `Not enough categories in database. Please choose a number lower than ${questionsArr.length}`
    );
    return;
  }
  const outputQuestions = [];
  const usedSeeds = [];
  console.log(questionsArr.length)
  for (let i = 0; i < categoryCount; i++) {
    let catSeed = Math.floor(Math.random() * questionsArr.length);
    while (usedSeeds.includes(catSeed)) {
      console.log('duplicate category, regenerating category num')
      catSeed = Math.floor(Math.random() * questionsArr.length);
    }
    usedSeeds.push(catSeed);
    outputQuestions.push(questionsArr[catSeed]);
  }
  return outputQuestions;
};

app.get("/questions", (req, res) => {
  console.log("questions endpoint hit!");
  const questionsData = JSON.parse(fs.readFileSync("./data/questions.json"));
  const questionsSet = genQuestionSet(questionsData, 4);
  res.status(200).json(questionsSet);
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
