const btnSend = document.getElementById('button');

document.getElementById('careerForm')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btnSend.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_07j681r';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btnSend.value = 'Send Email';
                alert('Sent!');
                window.location.href = 'index.html'
            }, (err) => {
                btnSend.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });