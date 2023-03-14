/*

It will disallow the use of shortcuts to the inspect element such as:
・F12
・Shift + I
・Right Mouse Button click

Notice that it won't prevent the inspect element from being opening.
It's impossible to disable completely because it is browser feature for technical purposes.

*/

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase())) || (e.ctrlKey && e.key.toUpperCase() === 'U')) {
    e.preventDefault();
  }
});

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
