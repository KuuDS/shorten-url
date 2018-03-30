const sqlite3 = require('sqlite3').verbose();

const opMap = {};

let db;

const init = function () {
  if (db) {
    console.error('Repeat initalizing database repeat.');
  }
  db = new sqlite3.Database('../db/data.db', sqlite3.OPEN_CREAT, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the data database.');
  });
};

/**
 * 调用操作方法
 * @param {String} key 
 */
const query = function (key, params, callback) {
  const method = opMap[key];
  if (!method || typeof method !== 'function') {
    callback(new TypeError('Query is not function'));
    return;
  }
  method(...params, callback);

};

/**
 * 注册查询方法
 * @param {String} key 
 * @param {Function} query 
 */
const register = function (key, query) {
  opMap[key] = query;
};

module.exports = {
  init,
  register,
  query
};