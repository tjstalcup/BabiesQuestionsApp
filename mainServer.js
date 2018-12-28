'use strict'

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// const {DATABASE_URL, PORT} = require('./config');
// const {QuestionBoard} = require('./appModel');

const app = express();

app.use(morgan('common'));
app.use(express.json());
app.use(express.static('FrontMain'));

// ========================CRUD process down here============================
// // -GET
// app.get('/questionPost', (req, res) => {
//   QuestionBoard
//     .find()
//     .then(posts => {
//       // res.json or res.html?
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({error: 'Something went wrong with GET process'});
//   });
// });
// app.get('/questionPost/:id', (req, res) => {
//   QuestionBoard
//     findById(req.params.id)
//     .then(post => res.json(post.serialize()))
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({error: 'Something went wrong with GET:ID process'});
//     });
// });
// // -POST
// app.post('/questionPost', (req, res) => {
//   const requiredFields = ['parentName', 'title'];
//   for (let i=0; i<requiredFields.length; i++) {
//     const field = requiredFields[i];
//     if(!(field in req.body)) {
//       const message = `Missing \`${field}\` in request body`;
//       console.error(message);
//       return res.status(400).send(message);
//     }
//   }
//   QuestionBoard
//     .create({
//       parentName: req.body.parentName,
//       title: req.body.title
//     })
//     .then(question => res.status(201).json(question.serialize()))
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({error: 'Something went wrong with POST section'});
//     });
// });
// app.delet('/questionPost/:id', (req, res) => {
//   QuestionBoard
//     .findByIdandRemove(req.params.id)
//     .then(() => {
//       res.status(204).json({ message: 'sucessfully deleted post'});
//     })
//     .catch(err => {
//       res.status(500).json({error: 'Something went wrong with POST-delete id section'});
//     });
// });
// // -PUT
// app.put('/questionPost/:id', (req, res) => {
//   if(!(req.params.id && req.body.id && req.params.id === req.body.id)) {
//     res.status(400).json({
//       error: 'Request path id and request body id values must be match'
//     });
//   }
//   const updated = {};
//   // const updatedFields = []; - Need to revisit on what's updateable and what's not
//   updatedFields.forEach(field => {
//     if(field in req.body) {
//       updated[field] = req.body[field];
//     }
//   });
//   QuestionBoard
//     .findByIdandUpdate(req.params.id, {$set: updated}, {new: true})
//     .then(updatedPost => res.status(204).end())
//     .catch(err => res.status(500).json({message: 'Something went wrong with second part of POST ID'}));
//   });
// // -DELETE
// app.delete('/:id', (req, res) => {
//   QuestionBoard
//     .findByIdandRemove(req.params.id)
//     .then(() => {
//       console.log(`Deleted question post with id \`${req.params.id}\``);
//       res.status(204).end();
//     });
// });
// app.use('*', function (req, res) {
//   res.status(404),json({message: 'Not Found'});
// });
// =============================================================================
if(require.main === module) {
    app.listen(process.env.PORT || 4747, function() {
      console.info(`App is listening on ${this.address().port}`);
    });
}

module.exports = app;
