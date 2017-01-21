// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const publicIp = require('public-ip')

publicIp.v4().then(ip => {
  document.write(ip)
  console.log({ip})
});
