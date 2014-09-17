chrome.runtime.onInstalled.addListener(function() {
  debugger;
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostSuffix: 'quora.com' },
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction() ]
    }]);
  });
});

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'snip-webp.js'
  });
});
