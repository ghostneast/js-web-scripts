/*

It was designed to use on website features to simulate the effect on specific strings/sections using element ID.
Of course it can be adapted for other purposes, just make sure to change everything from HTML.

Lines: [1, 12, 26] (just deleting it won't work, make sure you parse i'm just showing where u can find).

*/

const element = document.getElementById("'INPUT-ID TO COLLECT THE STRING CONTENT"); // Get HTML element by ID
const arrayWords = ["Pizza", "Hamburguer"]; // Insert the text that will be writen

let currentWord = ""; 
let index = 0; 
let writing = true; 

function writeText() {
  const completeWord = arrayWords[index];
  if (writing) {
    currentWord = completeWord.slice(0, currentWord.length + 1);
    element.textContent = currentWord; 
    if (currentWord === completeWord) {
      writing = false;
      setTimeout(eraseText, 2000); // Delay time to wait before start erasing the current word. (2 seconds)
    } else {
      setTimeout(writeText, 100);  // Delay time to write each word character (0,1 seconds)
    }
  }
}

function eraseText() {
  const completeWord = arrayWords[index]; 
  if (!writing) {
    currentWord = completeWord.slice(0, currentWord.length - 1); 
    element.textContent = currentWord; 
    if (currentWord === "") {
      writing = true; 
      index = (index + 1) % arrayWords.length; // Module operation to change texts
      setTimeout(writeText, 1000);      // Delay time before start to write the new word (1 second)
    } else {
      setTimeout(eraseText, 100);       // Delay time to erase each word character (0,1 seconds)
    }
  } else {
    writeText();
  }
}

writeText(); // Start