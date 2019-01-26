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
      .get('/testQuestionPosts')
      .then(_res => {
        res = _res;
        res.should.have.status(200);
        res.body.should.have.lengthOf.at.least(1);
        return QuestionBoard.count();
      })
      .then(count => {
        res.body.should.have.lengthOf(count);
      });
  });
  it('should return posts with right inputs', function() {
    let resQuestionBoard;
    return chai.request(app)
      .get('/testQuestionPosts')
      .then(function (res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.should.have.lengthOf.at.least(1);

        res.body.forEach(function(post) {
          post.should.be.a('object');
          post.should.include.keys('parentName', 'title', 'zipcode');
        });
        resQuestionBoard = res.body[0];
        return QuestionBoard.findById(resQuestionBoard.id);
      })
      .then(post => {
        resQuestionBoard.parentName.should.equal(post.parentName);
        resQuestionBoard.title.should.equal(post.title);
        resQuestionBoard.zipcode.should.equal(post.zipcode);
      });
  });
  // ---------------------
});
});
