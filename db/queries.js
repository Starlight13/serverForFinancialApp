const pool = require('./connectDB.js');
const query = require('./queryBuild.js');

async function authUser(email, password){
    return pool
    .query(query.authUser(email, password))
    .then(result => result.rowCount === 1 ? result.rows : [{userid: -1}])
    .catch(err => console.log(err))
}

async function ifEmailExists(email){
    return pool.
    query(query.ifEmailExists(email))
    .then(result => result.rowCount === 1 ? result.rows : [{userid: -1}])
    .catch(err => console.log(err))
}

async function userExpense(user){
    return pool
    .query(query.userExpense(user))
    .then(result => result.rows)
    .catch(err => console.log(err))
}

async function commonExpense(user, roomie){
    return pool
    .query(query.commonExpense(user, roomie))
    .then(result => result.rows)
    .catch(err => console.log(err))
}

async function compareExpense(user){
    return pool
    .query(query.compareExpense(user))
    .then(result => result.rows)
    .catch(err => console.log(err))
}
async function getSumByCat(user){
    return pool
    .query(query.getSumByCat(user))
    .then(result => result.rows)
    .catch(err => console.log(err))
}

async function mySumByCat(user){
    return pool
    .query(query.mySumByCat(user))
    .then(result => result.rows)
    .catch(err => console.log(err))
}

async function getSum(user){
    return pool
    .query(query.getSum(user))
    .then(result => result.rows)
    .catch(err => console.log(err))
}

async function addSpend(user, name, price, category, roomie, info){
    return pool
    .query(query.addSpend(user, name, price, category, roomie, info))
    .then(result => result.rows)
    .catch(err => console.log(err))
}

async function addUser(username, email, password){
    return pool
    .query(query.addUser(username, email, password))
    .then(result => result.rows)
    .catch(err => console.log(err))
}


async function changePass(user, password){
    return pool
    .query(query.changePass(user, password))
    .then(result => result.rows)
    .catch(err => console.log(err))
}

async function changeUsername(user, username){
    return pool
    .query(query.changeUsername(user, username))
    .then(result => result.rows)
    .catch(err => console.log(err))
}

async function getUserInfo(user){
    return pool
    .query(query.getUserInfo(user))
    .then(result => result.rows)
    .catch(err => console.log(err))
}


async function getRoomie(user){
    return pool
    .query(query.getRoomie(user))
    .then(result => result.rows)
    .catch(err => console.log(err))
}

async function addRoomie(user, roomie){
    return pool
    .query(query.addRoomie(user, roomie))
    .then(() => getUserInfo(roomie))
    .catch(err => console.log(err))
}

async function deleteRoomie(user, roomie){
    return pool
    .query(query.deleteRoomie(user, roomie))
    .then(result => result.rows)
    .catch(err => console.log(err))
}



async function monthForBar(user){
    return pool
    .query(query.monthForBar(user))
    .then(result => result.rows)
    .catch(err => console.log(err))
}

async function checkRoomie(user){
    return pool
    .query(query.checkRoomie(user))
    .then(result => result.rowCount === 1 ? result.rows : [{userid: -1}])
    .catch(err => console.log(err))
}




exports.authUser = authUser;
exports.userExpense = userExpense;
exports.addUser = addUser;
exports.addRoomie = addRoomie;
exports.deleteRoomie = deleteRoomie;
exports.getRoomie = getRoomie;
exports.commonExpense = commonExpense;
exports.compareExpense = compareExpense;
exports.getSumByCat = getSumByCat;
exports.addSpend = addSpend;
exports.getSum = getSum;
exports.mySumByCat = mySumByCat;
exports.monthForBar = monthForBar;
exports.changePass = changePass;
exports.changeUsername = changeUsername;
exports.getUserInfo = getUserInfo;
exports.ifEmailExists = ifEmailExists;
exports.checkRoomie = checkRoomie;