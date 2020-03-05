// Varibles & Input
'use strict';

// event listener
document.getElementById('submit-btn').addEventListener('click', displayMessage);

// Event Function
function displayMessage() {
  // input
  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let fullName = firstName + ' ' + lastName

  // Build
  let message = 'Hello ' + fullName + '.  Your surname is ' + lastName + ' and your first name is ' + firstName + '.';

  // output
  document.getElementById('output').innerHTML = message;
}