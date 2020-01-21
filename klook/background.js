chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({stop: false}, () => {console.log('klook extension loaded');});

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          hostEquals: 'www.klook.com',
          pathSuffix: 'coupons'
        }
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
