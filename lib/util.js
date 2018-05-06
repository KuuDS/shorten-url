const moment = require('moment'),
  md5 = require('md5'),
  seed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

const shorten = function() {
  const timestamp = moment().format('YYMMDDHHmmss');
  const randomToken = randomStr(128);
  return md5(Buffer.from(timestamp+randomToken).toString('base64')).substr(0,8);
};

const randomStr = function(length){
  let str = '';
  for(let i=0; i<length; i++){
    const pos = Math.round(Math.random() * (seed.length-1));
    str += seed[pos];
  }
  return str;
};

module.export = {
  shorten
};