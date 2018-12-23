"use strict"

// const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const childQuestionSchema = mongoose.Schema({
  parentName: {type: String, required: true},
  // Need more idea
  zipcode: {type: String},
  title: {type: String, required: true},
  question: {
    date: Date,
    content: String,
    childAge: Number,
    foundAnswer: String
  },
  id: uuid
// save later
})
