// Function to handle form submission
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Simple validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields");
        return;
    }

    // You can add more complex validation here, such as validating the email format

    // Form data
    var formData = {
        name: name,
        email: email,
        message: message
    };

    // Example of submitting form data (you can replace this with your own logic)
    console.log(formData); // Output the form data to console
    // Here you can send the form data to your server using AJAX or fetch API
    // Example:
    // fetch('your-server-endpoint', {
    //     method: 'POST',
    //     body: JSON.stringify(formData),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    // })
    // .then(response => response.json())
    // .then(data => {
    //     // Handle response from server
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
}

// You can add more advanced form validation functions if needed
// For example, validating email format, required fields, etc.


