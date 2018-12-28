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
  $('#entrySubmit').click(function(event){
    $('.container').html(
      `<nav></nav>
       <section>
        <div class='post-user'></div>
        Put your comment below here:
        <br>
        <input type='textarea'>
       </section>`
      )
  });
    console.log('entered the main page successful');
  }

  $(enterMainPage());
  
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
//
