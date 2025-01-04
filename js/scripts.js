document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const pages = document.querySelectorAll('.page');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-target');

            tabs.forEach(t => t.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(targetPage).classList.add('active');
        });
    });

    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(registrationForm);
            const playerName = formData.get('name');
            const playerEmail = formData.get('email');

            if (playerName && playerEmail) {
                alert(`Thank you for registering, ${playerName}!`);
                registrationForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});