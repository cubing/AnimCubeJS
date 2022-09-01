function readBinaryFile(url, callback) {
  var req = new XMLHttpRequest();
  req.open('get', url);
  req.responseType = 'arraybuffer';
  req.onload = function () {
    if (req.status != 200) {
      console.log('Error loading file: ' + url + ', status = ' + req.status);
      return;
    }
    var resp = new Int8Array(req.response);
    callback(resp);
  }
  req.send();
}

