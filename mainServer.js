'use strict'

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const {DATABASE_URL, PORT} = require('./config');
const {QuestionBoard} = require('./appModel');

const app = express();

app.use(morgan('common'));
app.use(express.static('FrontMain'));

// ================Practice with fake data=====================
// const practiceData = {
//   "postData": [
//     {
//       "id": "01",
//       "question": "Why the sky is blue?",
//       "childAge": 4,
//       "parentName": "Tom Smith",
//       "Date": "01/02/18"
//     },
//     {
//       "id": "02",
//       "question": "Why is grass green?",
//       "childAge": 3,
//       "parentName": "Nick Reed",
//       "Date": "01/10/18"
//     },
//     {
//       "id": "03",
//       "question": "How car go fast?",
//       "childAge": 5,
//       "parentName": "Ryan Cooper",
//       "Date": "01/15/18"
//     },
//     {
//       "id": "04",
//       "question": "Why dog is big?",
//       "childAge": 6,
//       "parentName": "Sarah Batahi",
//       "Date": "01/30/18"
//     }
//   ]
// };
// function postInfo(callbackFn) {
//   setTimeout(function(){callbackFn(practiceData)}, 100);
// }
// function displayPostInfo(data) {
//   for(index in data.postData){
//     $('body').append(
//       '<p>' + data.postData[index].text + '</p>');
//   }
// }
// function enactDisplayPostInfo() {
//   postInfo(displayPostInfo);
// }
// $(function(){
//   enactDisplayPostInfo();
// })

// enactDisplayPostInfo();
// =======================================


// ==================This section is for post/comment/profile==================
// function enterMainPage() {
//   console.log('entered the main page successful');
//   $(.container).html(
//     `<nav></nav>
//      <section>
//       <div class='post-user'></div>
//       Put your comment below here:
//       <br>
//       <input type='textarea'>
//      </section>`
//     )
//   }
//   function profileCreation() {
//     $(.container).html(
//       `<form>
//         <fieldset>
//           <legend>Profile Builder</legend>
//           First Name: <input type='text'>
//           Last Name: <input type='text'>
//           Email: <input type='text'>
//           Date of Birth: <input type='text'>
//           Username: <input type='text'>
//           Password: <input type='text'>
//         </fieldset>
//       </form>
//       `
//     )
//   }
//   MVP
// -Create User Posts
// -Create User profile
// -Create the account creation
// After MVP
// -Create download kids pics
// -Create Error message
// -Create Sign up board
// -Create report users' behavior

// ===============================================================================
// ========================CRUD process down here============================
// -GET
app.get('/questionPost', (req, res) => {
  QuestionBoard
    .find()
    .then(posts => {
      // res.json or res.html?
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong with GET process'});
  });
});
app.get('/questionPost/:id', (req, res) => {
  QuestionBoard
    findById(req.params.id)
    .then(post => res.json(post.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong with GET:ID process'});
    });
});
// -POST
app.post('/questionPost', (req, res) => {
  const requiredFields = ['parentName', 'title'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if(!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }
  QuestionBoard
    .create({
      parentName: req.body.parentName,
      title: req.body.title
    })
    .then(question => res.status(201).json(question.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Something went wrong with POST section'});
    });
});
app.delet('/questionPost/:id', (req, res) => {
  QuestionBoard
    .findByIdandRemove(req.params.id)
    .then(() => {
      res.status(204).json({ message: 'sucessfully deleted post'});
    })
    .catch(err => {
      res.status(500).json({error: 'Something went wrong with POST-delete id section'});
    });
});
// -PUT
app.put('/questionPost/:id', (req, res) => {
  if(!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    res.status(400).json({
      error: 'Request path id and request body id values must be match'
    });
  }
  const updated = {};
  // const updatedFields = []; - Need to revisit on what's updateable and what's not
  updatedFields.forEach(field => {
    if(field in req.body) {
      updated[field] = req.body[field];
    }
  });
  QuestionBoard
    .findByIdandUpdate(req.params.id, {$set: updated}, {new: true})
    .then(updatedPost => res.status(204).end())
    .catch(err => res.status(500).json({message: 'Something went wrong with second part of POST ID'}));
  });
// -DELETE
app.delete('/:id', (req, res) => {
  QuestionBoard
    .findByIdandRemove(req.params.id)
    .then(() => {
      console.log(`Deleted question post with id \`${req.params.id}\``);
      res.status(204).end();
    });
});
app.use('*', function (req, res) {
  res.status(404),json({message: 'Not Found'});
});
// =============================================================================
if(require.main === module) {
    app.listen(process.env.PORT || 4747, function() {
      console.info(`App is listening on ${this.address().port}`);
    });
}

module.exports = app;
