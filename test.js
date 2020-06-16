const request = require('supertest');
const app = require('./index.js');


describe('All tests', () => {
    it('Test "/"', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .end(done);
    });
    it('Sign up new accounts', function(done) {
        request(app)
            .post('/signUp')
            .send({"email": "test@email.com", "password": "testpass", "username": "TestUser1"})
            .expect(200)
            .end(done);
    });
    it('Sign in user to existing accounts', function(done) {
        request(app)
        .get('/signIn')
        .set('email', 'test@email.com')
        .set('password', 'testpass1')
        .expect(200)
        .end(done)
    });
    it('Display logged users spendings history', function(done) {
        request(app)
        .get('/Home')
        .set('user', '1')
        .expect(200)
        .end(done)
    });
    it('Display logged users month expenses', function(done) {
        request(app)
        .get('/getSum')
        .set('user', '1')
        .expect(200)
        .end(done)
    });
    it('Display users info', function(done) {
        request(app)
        .get('/getUserInfo')
        .set('user', '1')
        .expect(200)
        .end(done)
    });
    it('Allow user to change username', function(done) {
        request(app)
        .post('/changeUsername')
        .send({ 'user': '1', "username": "TestUser01"})
        .expect(200)
        .end(done)
    });
    it('Allow user to change password', function(done) {
        request(app)
        .post('/changePass')
        .send({ 'user': '1', 'password': '123123'})
        .expect(200)
        .end(done)
    });
    it('Check if user has a roomie', function(done) {
        request(app)
        .get('/ifRoomie')
        .set('user', '1')
        .expect(200)
        .end(done)
    });
    it('User can add a roomie', function(done) {
        request(app)
        .post('/addRoomie')
        .send({ 'user': '1', 'roomie': '4'})
        .expect(200)
        .end(done)
    });
    it('User can delete a roomie', function(done) {
        request(app)
        .post('/deleteRoomie')
        .send({ 'user': '1', 'roomie': '4'})
        .expect(204)
        .end(done)
    });
    it('User can add expenses', function(done) {
        request(app)
        .post('/addSpend')
        .send({"user": 1,"name":"qwerty","price":"12","category":"Food","info":"Wesret","roomiebool":true})
        .expect(200)
        .end(done)
    });
    it('User can get his and his roomies month common expenses', function(done) {
        request(app)
        .get('/getCommonPay')
        .set('user', '1')
        .expect(200)
        .end(done)
    });
    it('User can get his and his roomies month common expenses divided by categories', function(done) {
        request(app)
        .get('/getPie')
        .set('user', '1')
        .expect(200)
        .end(done)
    });
    it('User can get his and his roomies spendings history', function(done) {
        request(app)
        .get('/Roomie')
        .set('user', '1')
        .set('roomie', '4')
        .expect(200)
        .end(done)
    });
    it('User can get his and his roomies spendings history', function(done) {
        request(app)
        .get('/Roomie')
        .set('user', '1')
        .set('roomie', '4')
        .expect(200)
        .end(done)
    });
    it('User can get his month expenses divided by categories', function(done) {
        request(app)
        .get('/barData')
        .set('user', '1')
        .expect(200)
        .end(done)
    });
    it('User can get his monthly expenses statistics', function(done) {
        request(app)
        .get('/lineData')
        .set('user', '1')
        .expect(200)
        .end(done)
    });
});

