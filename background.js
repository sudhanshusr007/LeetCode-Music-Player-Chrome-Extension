// background.js

chrome.action.onClicked.addListener((tab) => {
    if (tab.url && tab.url.includes("leetcode.com")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
      });
    }
  });
  