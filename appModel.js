"use strict"

// const mongoose = require('mongoose');

const childQuestionSchema = mongoose.Schema({
  parentName: {type: String, required: true},
  // Need more idea
  zipcode: {type: String},
  question: {
    date: Date,
    text: String,
    childAge: Number,
    foundAnswer: String
  },
// save later
})
