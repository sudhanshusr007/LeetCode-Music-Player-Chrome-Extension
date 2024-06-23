// popup.js

document.getElementById('activate').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (tab.url.includes('leetcode.com')) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content.js']
        });
      }
    });
  });
  