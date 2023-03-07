/*

Make sure to insert between <script></script> on HTML file.

It will disallow the use of shortcuts to the inspect element such as:
・F12
・Shift + I
・Right Mouse Button click

Notice that it won't prevent the inspect element from being opening.
It's impossible to disable completely because it is browser feature for technical purposes.

*/

document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
    }
}

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    }, false);
} else {
    document.attachEvent('oncontextmenu', function() {
    window.event.returnValue = false;
    });
}