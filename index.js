// Get the rating buttons and display element
const ratingButtons = document.querySelectorAll('#rating-buttons button');
const ratingDisplay = document.querySelector(' #rating-display ');

// Set up event listeners for the rating buttons
ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Set the rating display to the button's value
    ratingDisplay.textContent = button.textContent;
    
    // Show the second card
    const card2 = document.querySelector('#card2');
    card2.style.display = 'block';
  });
});

// Set up event listener for the submit button
const submitButton = document.querySelector('#card1 button');
submitButton.addEventListener('click', () => {
  // Hide the first card
  const card1 = document.querySelector('#card1');
  card1.style.display = 'none';
});