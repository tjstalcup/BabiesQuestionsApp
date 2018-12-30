// function testpage() {
//   $(body).click(
//     console.log('it works...')
//   );
// }
//
// testpage();

const practiceData = {
  "postData": [
    {
      "id": "01",
      "question": "Why the sky is blue?",
      "childAge": 4,
      "parentName": "Tom Smith",
      "Date": "01/02/18"
    },
    {
      "id": "02",
      "question": "Why is grass green?",
      "childAge": 3,
      "parentName": "Nick Reed",
      "Date": "01/10/18"
    },
    {
      "id": "03",
      "question": "How car go fast?",
      "childAge": 5,
      "parentName": "Ryan Cooper",
      "Date": "01/15/18"
    },
    {
      "id": "04",
      "question": "Why dog is big?",
      "childAge": 6,
      "parentName": "Sarah Batahi",
      "Date": "01/30/18"
    }
  ]
};
function postInfo(callbackFn) {
  setTimeout(function(){callbackFn(practiceData)}, 100);
}
function displayPostInfo(data) {
  for(index in data.postData){
    $('.container').append(
      '<p>' + data.postData[index].question + '</p>');
  }
}
function enactDisplayPostInfo() {
  postInfo(displayPostInfo);
}
$(function(){
  enactDisplayPostInfo();
})

// $(enactDisplayPostInfo());

// // ==================This section is for post/comment/profile==================
// function test() {
//   $('#entryLogin').submit(
//     console.log('it worked')
//   );
// }
// $(test());

function enterMainPage() {
  $('#entrySubmit').click(function(e){
    e.preventDefault();
    $('.container').html(
      `<nav>
        <div class='navBoxA'>General Questions</div>
        <div class='navBoxB'>Daughter Questions</div>
        <div class='navBoxC'>Son Questions</div>
        <div class='navBoxD'>3-6 years old kids' Questions</div>
        <div class='navBoxE'>6-10 years old kids' Questions</div>
        <div class='navBoxF'>FAQs</div>
        <div class='navBoxG'>Suggestions</div>
       </nav>
       <section>
        <h3>Your Operation Center</h3>
        <p>Post:</p>
        <p>By:</p>
        <p>${Date}</p>
        <div class='post-user'>
        </div>
        Put your comment below here:
        <br>
        <input type='textarea'>
       </section>
       <input id='reportButton' type='button' value='REPORT ISSUE'>`
     );
  });
    console.log('entered the main page successful');
    $(reportIssue());
  }
// <p> ${data.post[index].question} </p>
  $(enterMainPage());

  function profileCreation() {
    $('#signUp').click(function(e) {
      e.preventDefault();
      $('.container').html(
        `<form>
          <fieldset>
            <legend>Profile Builder</legend>
            First Name: <input type='text'>
            <br>
            Last Name: <input type='text'>
            <br>
            Email: <input type='text'>
            <br>
            Date of Birth: <input type='text'>
            <br>
            Username: <input type='text'>
            <br>
            Password: <input type='text'>
            <br>
            <input type='button' value='Finalize the profile'>
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
        <h2>Report Issue Page</h2>
        <section>
          <p>Please share your concern regarding anything in this site</p>
          <form>
            <input type='text' value='please type down here'>
          </form>
        </section>
        `);
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
