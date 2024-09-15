document.addEventListener('DOMContentLoaded', () => {
    // Get references to the containers and buttons
    const containers = document.querySelectorAll('.container');
    const navButtons = document.querySelectorAll('.btns-prof button');
    const backButtons = document.querySelectorAll('.back-to-home');
    const submitButton = document.querySelector('.contact-text button');

    // Function to show the selected container and hide others
    function showContainer(id) {
        containers.forEach(container => {
            container.style.display = container.id === id ? 'block' : 'none';
        });
    }

    // Add click event listeners to the navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.id.replace('button', 'container');
            showContainer(targetId);
        });
    });

    // Add click event listeners to the back-to-home buttons
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            showContainer('homecontainer');
        });
    });

    // Add click event listener to the submit button
    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default form submission
            validateContactForm(); // Call the validation function
        });
    }

    // Function to validate the contact form and show an alert based on the filled fields
    function validateContactForm() {
        const name = document.querySelector('.contact-text input[type="text"]').value.trim();
        const email = document.querySelector('.contact-text input[type="email"]').value.trim();
        const message = document.querySelector('.contact-text input[type="text"]').value.trim();
        
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
        } else {
            alert(`Form submitted successfully!
            
Name: ${name}
Email: ${email}
Message: ${message}`);
        }
    }

    // Show the home container by default when the page loads
    showContainer('homecontainer');
});
