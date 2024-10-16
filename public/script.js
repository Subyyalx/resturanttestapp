document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const dish = document.getElementById('dish').value;

  fetch('/submit-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, dish })
  })
  .then(response => response.json())
  .then(data => {
    showConfirmationModal(data.name, data.dish);
  })
  .catch(error => console.error('Error:', error));
});

// Update dish images based on selection
document.getElementById('dish').addEventListener('change', function() {
const selectedDish = this.value;

// Hide all images
document.getElementById('pizzaImage').classList.add('hidden');
document.getElementById('burgerImage').classList.add('hidden');
document.getElementById('pastaImage').classList.add('hidden');

// Show the selected dish image
if (selectedDish === 'pizza') {
  document.getElementById('pizzaImage').classList.remove('hidden');
} else if (selectedDish === 'burger') {
  document.getElementById('burgerImage').classList.remove('hidden');
} else if (selectedDish === 'pasta') {
  document.getElementById('pastaImage').classList.remove('hidden');
}
});

// Show confirmation modal
function showConfirmationModal(name, dish) {
const modal = document.getElementById('confirmationModal');
const confirmationText = `Thank you, ${name}! Your order for ${dish} has been received.`;
document.getElementById('orderConfirmation').innerText = confirmationText;
modal.classList.remove('hidden');

// Close modal when close button is clicked
document.querySelector('.close-btn').addEventListener('click', () => {
  modal.classList.add('hidden');
});
}
