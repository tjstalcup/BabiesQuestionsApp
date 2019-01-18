"use strict"

const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const childQuestionSchema = mongoose.Schema({
  parentName: {type: String},
  // Need more idea
  zipcode: {type: String},
  title: {type: String},
  question: {
    date: Date,
    content: String,
    childAge: Number,
    foundAnswer: String
  }
  // ,
  // id: uuid
// save later
});

childQuestionSchema.methods.serialize = function() {
return {
  id: this._id,
  parentName: this.parentName,
  title: this.title,
  zipcode: this.zipcode,
  question: this.question
  };
};

const QuestionBoard = mongoose.model("QuestionBoard", childQuestionSchema);

module.exports = {QuestionBoard};
