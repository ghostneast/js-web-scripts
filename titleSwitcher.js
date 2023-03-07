/*

Toggles the page title when the user switches to another tab.

*/


var originalTitle = document.title;  // Save original title.
var attentionTitle = "Come back!";   // Alternative title.

function changeTitle() {
    document.title = attentionTitle; // Change to attentionTitle.
}

function returnTitle() {
    document.title = originalTitle; // Return to original title.
}

window.onblur = changeTitle;  // Call 'changeTitle' fuction when in another tab.
window.onfocus = returnTitle; // Call 'returnTitle' function when tab get focus.