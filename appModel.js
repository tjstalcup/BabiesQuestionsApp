"use strict"

const mongoose = require('mongoose');
const uuid = require('uuid');

// const userPostFormat = {
//   create: function(title, parentName, question) {
//     console.log("create a new post");
//     const singlePost = {
//       title: title,
//       id: uuid.v4(),
//       parentName: parentName,
//       question: question
//     };
//     this.singlePosts[singlePost.id] = singlePost;
//     return singlePost;
//   }
// };














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
  },
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
  question:{
    date: this.question.date,
    content: this.question.content,
    childAge: this.question.childAge,
    foundAnswer: this.question.foundAnswer
  }
  };
};

const QuestionBoard = mongoose.model("QuestionBoard", childQuestionSchema);

module.exports = {QuestionBoard};
