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
      // Show the modal with the order confirmation
      document.getElementById('orderStatus').innerText = `Order received: ${data.name} ordered ${data.dish}`;
      document.getElementById('orderModal').style.display = 'flex';
  })
  .catch(error => console.error('Error:', error));
});

// Close the modal when clicking on the "close" button
document.getElementById('closeModal').addEventListener('click', function() {
  document.getElementById('orderModal').style.display = 'none';
});

// Optional: Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
  const modal = document.getElementById('orderModal');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});