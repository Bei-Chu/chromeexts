function redeem(code) {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    form.append('code', code);
    const request = new XMLHttpRequest();
    request.addEventListener('load', (event) => resolve(JSON.parse(event.target.responseText)));
    request.addEventListener('error', (event) => reject(event.target.status));
    request.open('POST', '/v1/couponapisrv/redeem');
    request.send(form);
  });
}

function should_stop() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get('stop', (data) => {
      resolve(data.stop);
    });
  });
}

async function run() {
  console.log('run');
  while(!await should_stop()) {
    let result = {}
    try {
      result = await redeem('今年要赚好多钱');
    } catch (error) {
      console.error(error);
    }

    if (result.success) {
      break;
    } else {
      console.log(result.error.message);
    }
  }
  console.log('done');
}

chrome.storage.sync.set({stop: false}, run);
