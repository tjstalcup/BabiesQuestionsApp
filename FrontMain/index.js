
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
  // data.sort();
  // ('.container').children('#secondaryContainer')
  $.each(data.questionPosts, function(i, obj){
    $('#usersPosts').append(`<li>${obj.title}</li>`);
  });
  // enterMainPage(data);
}
function getDataToDisplay(){
  getAllPosts(displayDataList);
  // enterMainPage(displayDataList);
}

$(getDataToDisplay);



// const resultTemplate = (
//   '<li class="eachPost">' +
//     '<p>Post:</p>' +
//     '<p>By:/p>' +
//     '<span class="post-user"></span>' +
//     '<span>Location:</span>' +
//     Put your comment below here: +
//     '<br>' +
//     '<input type="textarea">' +
//   '</li>';
// );

// function insidePage2() {
//   console.log('Retrieving Posts')
//   $.getJSON(posts_centerURL, function(allData) {
//     console.log('rendering Posts');
//     const postsList = allData.map(function(data){
//       const result = $(resultTemplate);
//       element.attr('id', data.id);
//       element.find('#usersPosts').text(data.parentName);
//       data.question.forEach(function(info){
//         element.find('#questionData').append(
//           '<li>' + info + '</li>');
//       });
//       return element;
//     });
//     $('.eachPost').html(postsList)
//   });
// }

//Unknown attempt to get Ajax coordinate with jquery
//
// function insidePage(data){
//   $('#entrySubmit').click(function(e){
//     e.preventDefault();
//     const results = data.map(obj => {
//       return `
//       <li class='eachPost'>
//         <p>Post: ${obj.title}</p>
//         <p>By:${obj.parentName}</p>
//         <span class='post-user'>
//         ${obj.question}
//         </span>
//         <span>Location: ${obj.zipcode}</span>
//         Put your comment below here:
//         <br>
//         <input type='textarea'>
//       </li>`;
//     })
//     $('#usersPosts').html(results);
//   });
// }
// $(insidePage);


//  This is stage of what I wanted after login
function enterMainPage() {
  $('#entrySubmit').click(function(e){
    e.preventDefault();
    $('.container').html(
      `<nav>
        <ul id='nav'>
          <li class='navBox general_board'>General Questions</li>
          <li class='navBox'>Daughter Questions</li>
          <li class='navBox'>Son Questions</li>
          <li class='navBox'>Tricky Questions</li>
          <li class='navBox'>My Posts</li>
          <li class='navBox'>FAQs</li>
          <li class='navBox'>Suggestions</li>
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
    $('#usersPosts').html('result here');
    $(createPost);
    // $(insidePage2);
    // $(postUp);
  }

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
// function getInputs() {
//   $('.container').on('click', "#singlePost", function(e){
//     e.preventDefault();
//     // const newTitle = $('#titleInfo').val();
//     // console.log(newTitle);
//     const newTitle = document.getElementById('titleInfo').value;
//     console.log(newTitle);
//     const newQuestion = document.getElementById('questionData').value;
//     console.log(newQuestion);
//     // const newUserPost =  new postInput(newTitle, newQuestion);
//     // console.log(newUserPost);
//   });
//   postUp(newTitle, newQuestion);
// }
// $(getInputs);

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

  // const newTitle = document.getElementById('titleInfo').value;
  // const newQuestion = document.getElementById.('questionData').value;
  // console.log('receiving new post data');
  // const newUserPost =  new postInput(newTitle, newQuestion);
  // console.log(newUserPost);
}
$(postUp);

  // $(createPost);

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

// Just hold idea from enterMainPage
  // <li class='eachPost'>
  //   <p>Post:</p>
  //   <p>By:</p>
  //   <div class='post-user'>
  //   </div>
  //   Put your comment below here:
  //   <br>
  //   <input type='textarea'>
  // </li>
  // <li class='eachPost'>
  //   <p>Post:</p>
  //   <p>By:</p>
  //   <div class='post-user'>
  //   </div>
  //   Put your comment below here:
  //   <br>
  //   <input type='textarea'>
  // </li>
  // <li class='eachPost'>
  //   <p>Post:</p>
  //   <p>By:</p>
  //   <div class='post-user'>
  //   </div>
  //   Put your comment below here:
  //   <br>
  //   <input type='textarea'>
  // </li>
  // <li class='eachPost'>
  //   <p>Post:</p>
  //   <p>By:</p>
  //   <div class='post-user'>
  //   </div>
  //   Put your comment below here:
  //   <br>
  //   <input type='textarea'>
  // </li>
  // <li class='eachPost'>
  //   <p>Post:</p>
  //   <p>By:</p>
  //   <div class='post-user'>
  //   </div>
  //   Put your comment below here:
  //   <br>
  //   <input type='textarea'>
  // </li>


// ${body.questionboard.title[0]}




  //  <p>${Date}</p> for up above here.
// //<section>
//  <img src='${pic[0]}'>
//  <img src='${pic[1]}'>
//  <img src='${pic[2]}'>
//  <img src='${pic[3]}'>
//  <img src='${pic[4]}'>
//  <img src='${pic[5]}'>
// </section>
// <p> ${data.post[index].question} </p>
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

// function selectTopic() {
//   $('.navbox').click(function(e) {
//     e.preventDefault();
//     $('.container').html(
//       `<h3>${this.title}</h3>
//       <ul>Most recent posts:
//         <li>${this.data[0]}</li>
//         <li>${this.data[1]}</li>
//         <li>${this.data[2]}</li>
//         <li>${this.data[3]}</li>
//         <li>${this.data[4]}</li>
//         <li>${this.data[5]}</li>
//         <li>${this.data[6]}</li>
//       </ul>`
//     )
//   })
// }

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
