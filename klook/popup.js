const run = document.getElementById('run');
const stop = document.getElementById('stop');

function send_request() {
  console.log('send request')
}

run.onclick = function(element) {
  chrome.tabs.executeScript(undefined, {file: 'run.js'});
};

stop.onclick = function(element) {
  chrome.tabs.executeScript(undefined, {file: 'stop.js'});
};
