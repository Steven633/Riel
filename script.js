document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('nav a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
            });
        });
    }

    // Initialize EmailJS
    emailjs.init("YOUR_USER_ID"); // Ganti YOUR_USER_ID dengan User ID dari EmailJS

    // Add event listener for form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const formData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        };

        // Send email
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
            .then(function(response) {
                alert("Email sent successfully!");
                contactForm.reset(); // Reset form after successful submission
            }, function(error) {
                alert("Failed to send email. Please try again.");
                console.error("EmailJS error:", error);
            });
    });
});
