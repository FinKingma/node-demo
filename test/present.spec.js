var express = require('express');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
var server = require('../server');

chai.use(chaiHttp);


describe('mapmaker', function() {
    describe('The map generator api', function () {
        // var server = supertest.agent("http://localhost:3000");

        it('should generate a map in json', function (done) {
            chai.request(server)
                .get('/api/presents')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.message.should.include('cadeautje');
                    done();
                })
        });
    });
});