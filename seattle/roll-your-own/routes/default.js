module.exports = function defaultHandler(url, cb){
  results = {
    body : 'you requested + ' + url.pathname
  };
  cb(null, results);
};
