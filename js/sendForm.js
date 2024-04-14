
const btn = document.getElementById('buttonTest');

document.getElementById('myformtest')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   var formId = this.id;
    console.log('aca estoy')
   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_g7362ad';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      dataLayer.push({
        'event': 'formSubmit',
        'time':new Date(),
        'formId': formId,
        'gtm':{
          elementId: "myformtest",
        }
    });
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});