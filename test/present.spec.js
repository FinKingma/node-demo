var express = require('express');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
var server = require('../server');

chai.use(chaiHttp);


describe('presents api', function() {    
    it('moet een cadeautje teruggeven', function (done) {
        chai.request(server)
            .get('/api/presents')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.message.should.include('asjeblieft! een ingepakte');
                done();
            })
    });
});