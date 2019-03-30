'use strict'


// Another test -

const posts_centerURL = 'http://localhost:4747/questionPost'

function fetchAllPosts() {
  const postsData = {
    url: posts_centerURL,
    dataType: 'json',
    type: 'GET',
    success: renderPosts
  };
  console.log(postsData);
  //$.ajax(postsData);
  //getDataReal(postData)
  $.ajax(postsData);
}
//Call AJAX FRAMEWORK
function addPost(dataPost) {
  console.log('add new post: ' + dataPost.title + ' ' + dataPost.parentName + ' ' + dataPost.zip + ' ' + dataPost.question);
  $.ajax({
    method: 'POST',
    url: posts_centerURL,
    data: JSON.stringify(dataPost),
    success: function(data) {
      alert('Your post was submitted');

      $('#usersPosts').append(
        `<li class='eachPost'>
          <ul id="questionData">Post Title: ${dataPost.titleInfo}</ul>
          <p>The Question: ${dataPost.questionData}</p>
          <p>Content: </p>
          <div class='post-user'>
          ${dataPost.postInfo}
          </div>
          Put your comment below here:
          <br>
          <input type='textarea'>
        </li>`);
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
    success: function(e){
      console.log('Post deleted with id' + postId);
    }
  });
}

function updatePost(changePost) {
  console.log('updating post`' + changePost.id + '`');
  $.ajax({
    url: posts_centerURL + '/' + changePost.id,
    method: 'PUT',
    data: changePost,
    success: function(data) {
    }
  });
}
function renderPosts(data) {
  $.each(data.questionPosts, function(i, obj){
    let id = 'questionData_' + i;
    let deleteButtonId = `deleteButton_${i}`;
    let editButtonId = `editCreation_${i}`;

    console.log(deleteButtonId);
    console.log(editButtonId);
    $('#usersPosts').append(`<li class='eachPost'>
      <ul id="${id}">Post Title: ${obj.title}</ul>
      <p>The Question: ${obj.question.content}</p>
      <p>Content: </p>
      <div class='post-user'>
      </div>
      Put your comment below here:
      <br>
      <input type='textarea' id='comment_${obj.id}'>
      <input type='hidden' value='${obj.id}'>
      <button id='${editButtonId}'>Edit my post!</button>
      <button id='${deleteButtonId}'>Delete this Post</button>
    </li>`);
    console.log('Object id:' + obj.id);

    $('#' + editButtonId).click(function(e){
      e.preventDefault();
      console.log(`Edit called on ${id}`);
    });
    $('#' + deleteButtonId).click(function(e){
      e.preventDefault();
      deletePost(obj.id);
      console.log(`Delete called on ${id}`);
    });
});
}

function renderMainPage(){
  console.log("Render page called!");
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const newCurrentDate = month + "/" + day + "/" + year;

  $('#container-main').html(`
  <button id='postCreation'>Post Creation<br>Open/Close</button>
  <br>
  <div id='postbox'>
    <h2>Post Creation</h2>
    <form id="singlePost">
      <fieldset id='postDesign'>
      <legend>Creative Zone</legend>
      Title: <input id="titleInfo" class='postInfo' type='text' value='' placeholder='Write down Title'>
      <br>
      Question: <input id="questionData" class='postInfo' type='text' value='' placeholder='Write down a question'>
      <br>
      content: <textarea id='postInfo' type='text' placeholder='Write down content'></textarea>
      <br>
      date: ${newCurrentDate}
      <br>
      <input id="postSubmit" type='submit' value='Submit the post'></input>
      <button id='closeButton'>Close</button>
      </fieldset>
    </form>
  </div>
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
     <button id='editCreation'>Edit my post!</button>
     <button class='deleteButton'>Delete this Post</button>
   </li>
   </ul>
  </section>
  `);
  // parentName: req.body.parentName,
  // title: req.body.title,
  // zipcode: req.body.zipcode,
  // question: req.body.question
  $('#postSubmit').click(function(e){
    e.preventDefault();
    let data = {};
    data.parentName = "NameGoesHere"; //todo add parent name to form
    data.zip = '99999'; //todo add zipcode to form
    data.title =  document.getElementById('titleInfo').value;
    data.question = document.getElementById('questionData').value;
    data.postInfo = document.getElementById('postInfo').value;
    addPost(data);
  });
}

// function postUp(){
// $('.container').on('click', '#postSubmit', function(e){
//   e.preventDefault();
//   const newTitle = document.getElementById('titleInfo').value;
//   console.log(newTitle);
//   const newQuestion = document.getElementById('questionData').value;
//   console.log(newQuestion);
//   console.log("received data for post");
//   $('#usersPosts').append(`<li class='eachPost'>
//     <ul id="questionData">Post Title: ${newTitle}</ul>
//     <p>The Question: ${newQuestion}</p>
//     <p>Content: </p>
//     <div class='post-user'>
//     </div>
//     Put your comment below here:
//     <br>
//     <input type='textarea'>
//   </li>`);
// });
// }

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
      <form id='suggestionForm'>
        Your email please?<br>
        <input class='reportbox' type='text' placeholder='Your email?'>
        <br>
        it is for future following up
        <br>
        <div>----------------------------------------------------------------</div>
        Your Suggestion(s):
        <br>
        <textarea class='suggestiontext' placeholder='please type down here'></textarea>
        <br>
        <button>Submit your suggestion</button>
      </form>`)
  });
}
function myPosts(){
  $('.container').on('click', '#myPosts', function(e){
        console.log('*my Posts clicked*');
        e.preventDefault();
        renderMainPage();
        fetchAllPosts();
  });
}

  function profileCreation() {
    $('#signUp').click(function(e) {
      e.preventDefault();
      $('.container-main').html(
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

  function reportIssue() {
    $('#reportButton').click(function(e){
      e.preventDefault();
      $('.container-main').html(`
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

function backToMainPage() {
  $('#createdProfile').click(function(e){
    e.preventDefault();
    $(renderMainPage());
  });
}
function showNav(){
  $('#nav').show();
  $(suggestionTab);
  $(profileCreation());
  $(reportIssue());
  $(createPost());
  $(myPosts);
  $(generalQuestions);
}


$('#entrySubmit').click(function(e){

  console.log("***Entry submit  clicked");
  e.preventDefault();
  renderMainPage();
  showNav();
  fetchAllPosts();
});
function generalQuestions(){
  $('#generalQuestions').click(function(e){
    console.log('*Entry Submit clicked*');
    e.preventDefault();
    renderMainPage();
    fetchAllPosts();
  });
}
function createPost(){
  $('.container').on('click', '#postCreation', function(e){
    e.preventDefault();
    console.log('post testing worked');
    $('#postbox').toggle(``);
  });
}


// $(postUp);


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
