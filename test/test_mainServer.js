"use strict"

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../mainServer.js');

const expect = chai.expect;

chai.use(chaiHttp);

describe('html page', function(){
  it('should appear', function() {
    return chai
      .request(app)
      .get('/')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});
