const fs = require('fs');
const http = require('http');
const streamer = require("stream");

const server = http.createServer(function (req, res) {
  // fs.readFile("sample1.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data.toString());
  // })

  const rstream = fs.createReadStream("./sample1.txt");
  //data event for reading stream
  rstream.on('data', (chunkdata)=>{
    res.write(chunkdata);
  })
  //ending the streaming with end event
  rstream.on('end', ()=>{
    res.end();
  })
  //if any error then error event
  rstream.on('error', ()=>{
    res.end("File not found.");
  })

}).listen(8000, () => {
  console.log('Server running at http://127.0.0.1:8000/');
});

