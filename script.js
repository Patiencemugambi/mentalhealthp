// Get the form element by its class name
const form = document.querySelector('.contact-form');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display a success message
    alert('Form submitted successfully!');

    // Optionally, you can reset the form after displaying the alert
    form.reset();
});
