/* GOAL:
Create node app that takes in 2 command line arguments and downloads the resource at the url to a local path on your machine.
Upon completion, should print out a message that it has donwloaded and saved the resource to the patch

*PSEUDOCODE*
(1): takes in 2 command line arguments (url and local file path) -> process.argv[2] and process.argv[3]
(2): download information at URL
(3): saves information to a local html document on machine
(4): console logs that it has completed the process
*/


const argURL = process.argv[2];
const argPath = process.argv[3];
// pass command line arguments at indexes for URL and path

const fs = require('fs');
// require fs for file management in node

const request = require('request');
// require request to send HTTP request from node

let bodyInfo;
let bodySize;
// create variables to hold data for the body and body size

request(argURL, (error, response, body,) => {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body)
  
  let bodySize = body.length;
  // body size in bytes is equal to its character count

  let bodyInfo = body;
  // store body information

  fs.writeFile(argPath, bodyInfo, err => {
    if (err) {
      console.error(err);
    }
  })
  // write to specified new file and path
  // throw error if error
  
  console.log(`Downloaded and saved ${bodySize} bytes to ${argPath}`);
  // log that the information has been downloaded and saved to the path
});



