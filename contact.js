

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    
    if (name === '',  email === '',  mobile === '' || message === '') {
        alert('Please fill all the fields.');
        return;
    }

    const formData = {
        name: name,
        email: email,
        mobile: mobile,
        message: message
    };

    
    console.log('Form Data:', formData);

  
    alert('Thank you for your message, ' + name + '! We will get back to you shortly.');

 
    document.getElementById('contactForm').reset();
});