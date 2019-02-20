
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
//     $('.container').append(
//       '<p>' + data.postData[index].question + '</p>');
//   }
// }
// function enactDisplayPostInfo() {
//   postInfo(displayPostInfo);
// }
// $(function(){
//   enactDisplayPostInfo();
// })

// $(enactDisplayPostInfo());

// // ==================This section is for post/comment/profile==================

'use strict'


// Another test -

const posts_centerURL = 'http://localhost:4747/questionPost'
//another attempt - another failure
function getAllPosts(callback) {
  const postsData = {
    url: posts_centerURL,
    datatype: 'json',
    type: 'GET',
    success: callback
  };
  console.log(postsData);
  $.ajax(postsData);
}
function displayDataList(data) {
  console.log(data);
  $('#entrySubmit').click(function(e){
    e.preventDefault();
    $.each(data.questionPosts, function(i, obj){
      $('#usersPosts').append(`<li class='eachPost'>
        <ul id="questionData">Post Title: ${obj.title}</ul>
        <p>The Question: ${obj.question.content}</p>
        <p>Content: </p>
        <div class='post-user'>
        </div>
        Put your comment below here:
        <br>
        <input type='textarea'>
      </li>`);
  })
  });
  // enterMainPage(data);
}

function getDataToDisplay(){
  getAllPosts(displayDataList);
  // enterMainPage(displayDataList);
}

$(getDataToDisplay);

//  This is stage of what I wanted after login
function enterMainPage() {
  $('#entrySubmit').click(function(e){
    e.preventDefault();
    $('.container').html(
      `<nav>
        <ul id='nav'>
          <li class='navBox' id='general_board'>General Questions</li>
          <li class='navBox'>Tricky Questions</li>
          <li class='navBox'>My Posts</li>
          <li class='navBox' id='faq'>FAQs</li>
          <li class='navBox' id='suggestion'>Suggestions</li>
        </ul>
       </nav>
       <button id='postCreation'>My Post Creation</button>
       <div id='postbox'></div>
       <section id='secondaryContainer'>
       <h3>Your Sharing Center</h3>
        <ul id='usersPosts'>
        <li class='eachPost'>
          <ul id="questionData">Post:EXAMPLE</ul>
          <p>By:EXAMPLE</p>
          <div class='post-user'>
          </div>
          Put your comment below here:
          <br>
          <input type='textarea'>
        </li>
        </ul>
       </section>
       `
     );
  });
    console.log('entered the main page successful');
    // $(reportIssue());
    // $('#usersPosts').html('result here');
    $(createPost);
    // $(insidePage2);
    // $(postUp);
  }
// function generalPage() {
//   $('#general_board').on('click', function(e){
//     e.preventDefault();
//     enterMainPage();
//   });
// }
// $(generalPage);

const currentDate = new Date();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const newCurrentDate = month + "/" + day + "/" + year;

  function createPost() {
    $('.container').on('click', '#postCreation', function(e){
      e.preventDefault();
      console.log('post testing worked.');
      $('#postbox').html(`
        <h2>Post Creation</h2>
        <form id="singlePost">
          <fieldset id='postDesign'>
          <legend>Creative Zone</legend>
          Title: <input id="titleInfo" class='postInfo' type='text' value='' placeholder='Write down Title'>
          <br>
          Question: <input id="questionData" class='postInfo' type='text' value='' placeholder='Write down a question'>
          <br>
          content: <textarea class='postInfo' type='text' placeholder='Write down content'></textarea>
          <br>
          date: ${newCurrentDate}
          <br>
          <input id="postSubmit" type='submit' value='Submit the post'></input>
          </fieldset>
        </form>`
      );
    });
  }


function postUp(){
$('.container').on('click', '#postSubmit', function(e){
  e.preventDefault();
  const newTitle = document.getElementById('titleInfo').value;
  console.log(newTitle);
  const newQuestion = document.getElementById('questionData').value;
  console.log(newQuestion);
  console.log("received data for post");
  $('#usersPosts').append(`<li class='eachPost'>
    <ul id="questionData">Post Title: ${newTitle}</ul>
    <p>The Question: ${newQuestion}</p>
    <p>Content: </p>
    <div class='post-user'>
    </div>
    Put your comment below here:
    <br>
    <input type='textarea'>
  </li>`);
});
}
$(postUp);

function freqAQs(){
  $('.container').on('click', '#faq', function(e){
    e.preventDefault();
    $('#secondaryContainer').html(`
      <h2>Your FAQs board!</h2>
      <ul class='f' >Questions????
        <li>Q: Is there any children age limit for asking question?
          <li class='s'>A: Guess as long it is before teenager age since this site is design for early age questions.</li>
        </li>
        <li>Q: Can I post a child's ridiclous, embarass, awkward, and hard question?
          <li class='s'>A: Hell yeah, there is no question that is not allow to be share! </li>
        </li>
        <li>Q: Where can I report about my concern?
          <li class='s'>A: You can find the icon at bottom left corner. Just click it away.</li>
        </li>
        <li>Q:
            <li class='s'>A: </li>
        </li>
        <li></li>
        <li></li>
      </ul>`)
  });
}

$(freqAQs);

function suggestionTab() {
  $('.container').on('click', '#suggestion', function(e){
    e.preventDefault();
    $('#secondaryContainer').html(`
      <form>
        Your email please, it is for future following up: <input class='reportbox' type='text' placeholder='Your email?'>
        <br>
        Your Suggestion(s): <textarea class='suggestiontext' placeholder='please type down here'></textarea>
      </form>`)
  });
}

  $(suggestionTab);

  //Call AJAX FRAMEWORK
function addPost(dataPost) {
  console.log('add new post: ' + dataPost);
  $.ajax({
    method: 'POST',
    url: posts_centerURL,
    data: JSON.stringify(dataPost),
    success: function(data) {
      insidePage2();
    },
    datatype: 'json',
    contentType: 'application/json'
  });
}

function deletePost(postId) {
  console.log('Deleting Post `' + postId + '`');
  $.ajax({
    url: posts_centerURL + '/' + postId,
    method: 'DELETE',
    success: insidePage2
  });
}

function updatePost(changePost) {
  console.log('updating post`' + changePost.id + '`');
  $.ajax({
    url: posts_centerURL + '/' + changePost.id,
    method: 'PUT',
    data: changePost,
    success: function(data) {
      insidePage2();
    }
  });
}
  //------------------------------


  $(enterMainPage);

  function profileCreation() {
    $('#signUp').click(function(e) {
      e.preventDefault();
      $('.container').html(
        `<form>
          <fieldset id='profileContainer'>
            <legend>Profile Builder</legend>
            First Name: <input class='profiletext' type='text' placeholder='Required Input'>
            <br>
            Last Name: <input class='profiletext' type='text' placeholder='Required Input'>
            <br>
            Email: <input class='profiletext' type='text' placeholder='Required Input'>
            <br>
            Date of Birth: <input class='profiletext' type='text' placeholder='Required Input'>
            <br>
            Username: <input class='profiletext' type='text' placeholder='Required Input'>
            <br>
            Password: <input class='profiletext' type='text' placeholder='Required Input'>
            <br>
            <input id='createdProfile' type='button' value='Finalize the profile'>
          </fieldset>
        </form>`
      );
    });
  }
  $(profileCreation());

  function reportIssue() {
    $('#reportButton').click(function(e){
      e.preventDefault();
      $('.container').html(`
        <h2>Issue(s) report page</h2>
        <section>
          <p>Please share your concern regarding anything in this site</p>
          <form id='submitIssue'>
            <input class='reportbox' type='text' placeholder='Your name?'>
            <br>
            <input class='reportbox' type='text' placeholder='Your email?'>
            <br>
            <textarea class='reporttext' placeholder='please type down here'></textarea>
          </form>
        </section>
        `);
    });
  }
$(reportIssue());

function backToMainPage() {
  $('#createdProfile').click(function(e){
    e.preventDefault();
    $(enterMainPage());
  });
}



//   MVP
// -Create User Posts - kinda
// -Create User profile - need polish
// -Create the account creation - need to set connection
// After MVP
// -Create download kids pics
// -Create Error message
// -Create Sign up board
// -Create report users' behavior

// ===============================================================================
//
