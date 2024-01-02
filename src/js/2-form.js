document.addEventListener('DOMContentLoaded', function () {
      const feedbackForm = document.getElementById('feedback-form');

      const savedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
      document.getElementById('email').value = savedState.email || '';
      document.getElementById('message').value = savedState.message || '';

      feedbackForm.addEventListener('input', function (event) {
        if (event.target.matches('input, textarea')) {
 
          const currentState = {
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
          };
          localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
        }
      });

      feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

       
        const formData = {
          email: document.querySelector('email').value,
          message: document.querySelector('message').value,
        };
        console.log(formData);

        document.querySelector('email').value = '';
        document.querySelector('message').value = '';
        localStorage.removeItem('feedback-form-state');
      });
    });