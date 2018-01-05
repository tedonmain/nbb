function start() {
  console.log("Rquest handler 'start' was called.");
  return "Hello Start";
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "hello Upload";
}

exports.start = start;
exports.upload = upload;

