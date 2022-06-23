const facebookDiana = document.querySelector('#facebookDiana');
const facebookShalom = document.querySelector('#facebookShalom');
const instagramDiana = document.querySelector('#instagramDiana');
const instagramShalom = document.querySelector('#instagramShalom');
const callDiana = document.querySelector('#callDiana');
const callShalom = document.querySelector('#callShalom');


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