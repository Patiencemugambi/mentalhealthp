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

// // Smooth scrolling when clicking on navigation links
// document.querySelectorAll('nav ul li').forEach((link) => {
//     link.addEventListener('click', (event) => {
//       event.preventDefault(); // Prevent default link behavior
//       const targetId = event.target.textContent.toLowerCase().replace(' ', ''); // Get the target element's ID from the clicked link
//       const targetElement = document.getElementById(targetId); // Get the target element by its ID
  
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
//       }
//     });
//   });
  