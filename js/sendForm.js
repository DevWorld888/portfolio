
const btn = document.getElementById('buttonTest');

document.getElementById('myformtest')
 .addEventListener('submit', function(event) {
   event.preventDefault();
    console.log('aca estoy')
   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_g7362ad';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});