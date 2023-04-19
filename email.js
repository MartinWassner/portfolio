

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {

   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_0da9xfk';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Email sent!';
      btn.classList.add('success');
      setTimeout(() => {
        btn.classList.remove('success');
        btn.value = 'Send Email'
      }, 2000);
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

