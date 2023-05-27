// Get the form element by its class name
const form = document.querySelector('.contact-form');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display a success message
    alert('Form submitted successfully!');

    // reset the form after displaying the alert
    form.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

//slideshow
var images = document.querySelectorAll('.slideshow img');
  var currentIndex = 0;

  setInterval(function() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }, 3000); // Change image every 3 seconds