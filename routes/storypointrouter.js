const express = require("express");
const storypointRoutes = express.Router();
const StoryPointModel = require("../models/storypointmodel");

// get all data
storypointRoutes.get('/', async (req, res) => {
  try {
    const storyList = await StoryPointModel.find();
    res.json(storyList);
  } catch (err) {
    res.json({ message: err });
  }
});

// find one data
storypointRoutes.get('/:issueKey', async (req, res) => {
  try {
    const storyFound = await StoryPointModel.findOne({
      issueKey: req.params.issueKey
    });
    res.json(storyFound);
  } catch (err) {
    res.json({ message: err });
  }
});

// create data
storypointRoutes.post('/', async (req, res) => {
  const story = new StoryPointModel({
    value: req.body.value,
    issueKey: req.body.issueKey
  });

  try {
    const savedStory = await story.save();
    res.status(200).json(savedStory);
  } catch (err) {
    res.json({ message: err });
  }
});

// update data
storypointRoutes.patch('/:issueKey', async (req, res) => {
  try {
    const updatedStory = await StoryPointModel.updateOne(
      { issueKey: req.params.issueKey },
      { $set: { 
        value: req.body.value
      }}
    );
    res.status(200).json(updatedStory);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete data
storypointRoutes.delete('/:storyId', async (req, res) => {
  try {
    const deletedStory = await StoryPointModel.remove({ _id: req.params.storyId })
    res.status(200).json(deletedStory);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = storypointRoutes;
