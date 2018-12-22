'use strict'

const express = require('express');
const app = express();

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
//
// or enactDisplayPostInfo();?
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
// -POST
// -PUT
// -DELETE
// =============================================================================
if(require.main === module) {
    app.listen(process.env.PORT || 4747, function() {
      console.info(`App is listening on ${this.address().port}`);
    });
}

module.exports = app;
