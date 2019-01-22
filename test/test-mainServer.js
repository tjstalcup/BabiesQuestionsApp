"use strict"

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require("mongoose");

const expect = chai.expect;

const {app, runServer, closeServer} = require('../mainServer.js');
const {QuestionBoard} = require("../appModel");
const {TEST_DATABASE_URL} = require("../config");

chai.use(chaiHttp);

// const practiceData = require('../questionsdata');

function seedData() {
  console.info('seeding practice data');
  const info = [];

  for (let i=1; i<=4; i++) {
    info.push(generateData());
  }
  return QuestionBoard.insertMany(info);
}
function generateParentName() {
  const parentName = [
    'Jim Craig', 'Tom Hanks', 'Chris Murphy', 'Kristen Bowers'
  ];
  return parentName[Math.floor(Math.random() * parentName.length)];
}

function generateTitle() {
  const title = [
    'Green Sky', 'Crash-landed', 'Alien Invasion', 'Pirate Love'
  ];
  return title[Math.floor(Math.random() * title.length)];
}

function generateZipcode() {
  const zipcode = [
    '11111', '22222', '33333', '44444', '55555'
  ];
  return zipcode[Math.floor(Math.random() * zipcode.length)];
}

function generateData() {
  return {
  name: generateParentName(),
  title: generateTitle(),
  zipcode: generateZipcode()
};
}
function wipeDownDb() {
  console.warn('Deleting test database');
  return mongoose.connection.dropDatabase();
}

describe('Question Posts API resource', function() {
  before(function() {
    return runServer(TEST_DATABASE_URL);
  });
  beforeEach(function() {
    return seedData();
  });
  afterEach(function() {
    return wipeDownDb();
  });
  after(function() {
    return closeServer();
  });
//     describe("GET endpoint", function() {
//       it('should return all exisitng posts', function() {
//         let res;
//         return chai.request(app)
//         .get('/questionPost')
//       });
//     });
// })
//
  describe("GET endpoint", function() {
    it('should return all exisitng posts', function() {
      return chai.request(app)
      .get('/questionPost')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        // expect(res.body.questionboards).to.be.above(0);
        // expect(res.body.questionboards).to.be.a('array');
        // res.body.questionboards.forEach(function(questionboard) {
        //   expect(questionboard).to.be.a('object');
        //   expect(questionboard).to.include.keys('id', 'parentName', 'zipcode', 'title', 'question');
        // });
      })


















      // let res;
      // return chai.request(app)
      //   .get('/questionPost')
      //   .then(function(_res) {
      //     res = _res;
      //     expect(res).to.have.status(200);
      //     expect(res.body.questionboards).to.have.lengthOf.at.least(1);
      //     return QuestionBoard.count();
      //   })
      //   .then(function(count) {
      //     expect(res.body.questionboards).to.have.lengthOf(count);
      //   });

        // .end(function(err, res) {
        //   expect(err).to.be.null;
        //   expect(res).to.have.status(200);
        //   expect(res.body).to.be.a('array');
        // });

      // let res;
      // return chai.request(app)
      //   .get('/questionPost')
      //   .then(function(_res) {
      //     res = _res;
      //     expect(res).to.have.status(200);
      //     expect(res.body.questionPost).to.have.lengthOf.at.least(1);
      //     return QuestionBoard.count();
      //   })
      //   .then(function(count) {
      //     expect(res.body.questionPost).to.have.lengthOf(count);
      //   });
    });
    it('should return question posts with right fields', function() {
      return chai.request(app)
        .get('/questionPost')
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          // expect(res.body).be.a('array');
        })

  //     let resQuestionPost;
  //     return chai.request(app)
  //       .get('/questionPost')
  //       .then(function(res) {
  //         expect(res).to.have.status(200);
  //         expect(res).to.be.json;
  //         expect(res.body.questionPost).to.be.a('array');
  //         expect(res.body.questionPost).to.have.lengthOf.at.least(1);
  //
  //         res.body.questionPost.forEach(function(post) {
  //           expect(post).to.be.a('object');
  //           expect(post).to.include.keys(
  //             'parentName', 'title', 'zipcode'
  //           );
  //         });
  //         resQuestionPost = res.body.questionPost[0];
  //         return QuestionBoard.findById(resQuestionPost.id);
  //       })
  //       .then(function(post) {
  //         expect(resQuestionPost.id).to.equal(post.id);
  //         expect(resQuestionPost.parentName).to.equal(post.parentName);
  //         expect(resQuestionPost.title).to.equal(post.title);
  //         expect(resQuestionPost.zipcode).to.equal(post.zipcode);
  //       });
    });
  });
  // Hold on with describe on POST endpoint
})


























// describe('Question-Board', function() {
//   before(function(){
//     return runServer();
//   });
//   after(function(){
//     return closeServer();
//   });
//   it("should able to list questions on GET", function(){
//     return chai
//       .request(app)
//       .get('/questionPost')
//       .then(function(res){
//         expect(res).to.have.status(200);
//         // expect(res).to.be.json;
//         // expect(res.body).to.be.a('array');
//         // expect(res.body.length).to.be.at.least(1);
//         // const expectedInputs = ['parentName', 'title'];
//         // res.body.forEach(function(item){
//         //   expect(item).to.be.a('object');
//         //   expect(item).to.incline.keys(expectedInputs);
//         // });
//       });
//   });
//
// })
// // describe('mainJS', function() {
// //   it('should able to get info on /questionPost GET');
// //   it('should able to get id by GET');
// // });
// //
// //
// //
// // describe('html page', function(){
// //   it('should appear', function() {
// //     return chai
// //       .request(app)
// //       .get('/')
// //       .then(function(res) {
// //         expect(res).to.have.status(200);
// //       });
// //   });
// // });
