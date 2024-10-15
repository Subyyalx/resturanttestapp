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
      document.getElementById('orderStatus').innerText = `Order received: ${data.name} ordered ${data.dish}`;
    })
    .catch(error => console.error('Error:', error));
  });
  