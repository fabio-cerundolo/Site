// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form submission
form.addEventListener('submit', handleSubmit);

// Define the handleSubmit function
function handleSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Send the form data to the server (replace with your own API endpoint)
  fetch('/api/contact', {
    method: 'POST',
    body: formData,
  })
   .then((response) => {
      // Check if the response was successful
      if (response.ok) {
        // Get the response data
        return response.json();
      } else {
        // Throw an error if the response was not successful
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
    })
   .then((data) => {
      // Handle the response data
      console.log(data);
      // You can also update the UI here
    })
   .catch((error) => {
      // Handle any errors that occurred
      console.error(error);
    });
}