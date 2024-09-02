document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    // Simple form validation or other actions
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const query = document.getElementById('query').value;

    if (name && phone && email && query) {
        alert('Thank you for contacting us, ' + name + '. We will get back to you shortly.');
        // You can add code here to send the form data to a server or reset the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all the fields.');
    }
});
