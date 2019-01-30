"use strict"

const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require("mongoose");

const should = chai.should();

const {app, runServer, closeServer} = require('../mainServer.js');
const {QuestionBoard} = require("../appModel");
const {TEST_DATABASE_URL} = require("../config");

chai.use(chaiHttp);

function seedData() {
  console.info('seeding practice data');
  const seedData = [
    {parentName: 'Jim Craig', title: 'Green Sky', zipcode: '11111' },
    {parentName: 'Tom Hanks', title: 'Crash-landed', zipcode: '22222'},
    {parentName: 'Chris Murphy', title: 'Alien Invasion', zipcode: '33333'},
    {parentName: 'Kristen Bowers', title: 'Pirate Love', zipcode: '44444'}
  ];
  return QuestionBoard.insertMany(seedData);
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

it("given html contents", function() {
  return chai
  .request(app)
  .get("/")
  .then (res => {
    res.should.have.status(200);
    res.should.be.html;
  });
});

describe('GET endpoint', function() {

  it('should return all existing posts', function() {
    let res;
    return chai.request(app)
      .get("/questionPost")
      .then(_res => {
        res = _res;
        res.should.have.status(200);
        res.should.be.json;
        res.body.questionPosts.should.have.lengthOf.at.least(1);
        return QuestionBoard.countDocuments();
      })
      .then(count => {
        res.body.questionPosts.should.have.lengthOf(count);
      });
  });
  it('should return posts with right inputs', function() {
    let resQuestionBoard;
    return chai.request(app)
      .get("/questionPost")
      .then(function (res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.questionPosts.should.be.a('array');
        res.body.questionPosts.should.have.lengthOf.at.least(1);

        res.body.questionPosts.forEach(function(post) {
          post.should.be.a('object');
          post.should.include.keys('parentName', 'title', 'zipcode');
        });
        resQuestionBoard = res.body.questionPosts[0];
        return QuestionBoard.findById(resQuestionBoard.id);
      })
      .then(post => {
        resQuestionBoard.parentName.should.equal(post.parentName);
        resQuestionBoard.title.should.equal(post.title);
        resQuestionBoard.zipcode.should.equal(post.zipcode);
      });
  });
  it('should return 5 most recent post', function() {
    let res;
    return chai.request(app)
    .get('/questionPost')
    //in future will add modularization
    .then(_res => {
      res = _res;
      res.should.have.status(200);
      res.body.questionPosts.should.have.lengthOf.at.least(4);
    })
  });
});
describe("POST endpoint", function() {
  it('should add a new post', function() {
    const newPost = {
      parentName: 'Jerry Shields',
      title: "Endless Storm",
      zipcode: "77777"
    };
    return chai.request(app)
    .post("/questionPost")
    .send(newPost)
    .then(function(res) {
      res.should.have.status(201);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.include.keys('id', 'parentName', 'title', 'zipcode');
      res.body.id.should.not.be.null;
      res.body.parentName.should.equal(newPost.parentName);
      res.body.title.should.equal(newPost.title);
      res.body.zipcode.should.equal(newPost.zipcode);
      return QuestionBoard.findById(res.body.id);
    })
    .then(function(post) {
      post.parentName.should.equal(newPost.parentName);
      post.title.should.equal(newPost.title);
      post.zipcode.should.equal(newPost.zipcode);
    });
  });
});
describe('PUT endpoint', function() {
  it('update a single post', function() {
    const updatePost = {
      parentName: "Shelly Far-Out",
      title: "UFO has landed",
      zipcode: "10001"
    };
    return QuestionBoard
      .findOneAndUpdate()
      .then(modifyPost => {
        updatePost.id = modifyPost.id;
      return chai.request(app)
        .put(`/questionPost/${modifyPost.id}`)
        .send(updatePost);
      })
      .then(res => {
        res.should.have.status(204);
        return QuestionBoard.findById(updatePost.id);
      })
      .then(modifyPost => {
        modifyPost.parentName.should.equal(updatePost.parentName);
        modifyPost.title.should.equal(updatePost.title);
        modifyPost.zipcode.should.equal(updatePost.zipcode);
      });
  });
});
describe('DELETE endpoint', function() {
  it('should delete a post by id', function() {
    let post;
    return QuestionBoard
    .findOneAndDelete()
    .then(_post => {
      post = _post;
      return chai.request(app).delete(`/questionPost/${post.id}`);
    })
    .then(res => {
      res.should.have.status(204);
      return QuestionBoard.findById(post.id);
    })
  });
});

});
