chrome.runtime.onInstalled.addListener(function() {

});
chrome.webNavigation.onCompleted.addListener(function() {

}, { url: [{ urlMatches: "" }] });