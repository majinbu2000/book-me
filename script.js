document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const eventType = document.getElementById("event").value;
    const date = document.getElementById("date").value;

    const responseMessage = `
        <p>Thank you for booking with me!</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Event Type: ${eventType}</p>
        <p>Preferred Date: ${date}</p>
        <p>I will contact you soon to confirm your booking.</p>
    `;
    document.getElementById("response").innerHTML = responseMessage;

    // Send an email (you will need a backend service like Formspree or a server-side solution)
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('event', eventType);
    formData.append('date', date);

    fetch('https://formspree.io/f/mwkjpzzn', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Booking successful! You will receive a confirmation email shortly.');
    })
    .catch(error => {
        alert('Oops! There was an error with your booking.');
    });
});
