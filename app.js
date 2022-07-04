const facebookDiana = document.querySelector('#facebookDiana');
const facebookShalom = document.querySelector('#facebookShalom');
const instagramDiana = document.querySelector('#instagramDiana');
const instagramShalom = document.querySelector('#instagramShalom');
const callDiana = document.querySelector('#callDiana');
const callShalom = document.querySelector('#callShalom');
const form = document.querySelector('#contactInfo');
const sendBtn = document.querySelector('#sendBtn');
const closeModalButton = document.querySelector('#closeModalButton');

const resParagraph = form.lastElementChild;

const sendEmail = () => {
    let msg = {
        message: `שם מלא: ${form.elements[0].value}, 
                  טלפון: ${form.elements[1].value},  
                  מין: ${form.elements[2].value}, 
                  אימון מועדף: ${form.elements[3].value}.`
    };


    emailjs.send('service_t15ljo9', 'template_34lhgz6', msg)
        .then(function (res) {
            console.log('success', res.status);
            const successMsg = 'פרטיך התקבלו בהצלחה, תודה!';
            resParagraph.innerText = successMsg;

        })
        .catch(function (res) {
            console.log('error sending info', res.status);
            const errorMsg = 'חלה שגיאה בשליחת הפרטים, יש לנסות במועד מאוחר יותר.';
            resParagraph.innerText = errorMsg;
        })
}

closeModalButton.addEventListener('click', function () {
    resParagraph.innerText = '';
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    sendEmail();
    for (let element of form.elements)
        element.value = '';
});


sendBtn.addEventListener('click', function () {
    const successMsg = 'פרטיך התקבלו בהצלחה, תודה!';
    const errorMsg = 'חלה שגיאה בשליחת הפרטים, יש לנסות במועד מאוחר יותר.';

});

facebookDiana.addEventListener('mouseenter', function () {
    facebookDiana.style.boxShadow = '0 4px 2px -2px blue';
});

facebookDiana.addEventListener('mouseleave', function () {
    facebookDiana.style.boxShadow = 'none';
});

facebookShalom.addEventListener('mouseenter', function () {
    facebookShalom.style.boxShadow = '0 4px 2px -2px blue';
});

facebookShalom.addEventListener('mouseleave', function () {
    facebookShalom.style.boxShadow = 'none';
});

instagramDiana.addEventListener('mouseenter', function () {
    instagramDiana.style.boxShadow = '0 4px 2px -2px #e85d04';
});

instagramDiana.addEventListener('mouseleave', function () {
    instagramDiana.style.boxShadow = 'none';
});

instagramShalom.addEventListener('mouseenter', function () {
    instagramShalom.style.boxShadow = '0 4px 2px -2px #e85d04';
});

instagramShalom.addEventListener('mouseleave', function () {
    instagramShalom.style.boxShadow = 'none';
});

callDiana.addEventListener('mouseenter', function () {
    callDiana.style.boxShadow = '0 4px 2px -2px green';
});

callDiana.addEventListener('mouseleave', function () {
    callDiana.style.boxShadow = 'none';
});

callShalom.addEventListener('mouseenter', function () {
    callShalom.style.boxShadow = '0 4px 2px -2px green';
});

callShalom.addEventListener('mouseleave', function () {
    callShalom.style.boxShadow = 'none';
});