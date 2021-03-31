let google = document.createElement('iframe');

document.querySelector('.buttonBlueHaven').onclick = function () {

    google.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.247727823564!2d32.0076088152828!3d36.54813938000127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dca27fd266a1c5%3A0x3787d93dac2339f!2sBlue%20Heaven%20Apart%20Hotel!5e0!3m2!1sru!2sua!4v1617091202770!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"';
    document.querySelector('.map').append(google);
    document.querySelector('.map').style.visibility = 'visible'


}

document.querySelector('.buttonBelleMare').onclick = function () {

    google.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.4402893265938!2d57.78016111546721!3d-20.19901708645371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217cfb0ae41af789%3A0xde80166c565426b5!2sLUX%20Belle%20Mare%20Resort%20%26%20Villas!5e0!3m2!1sru!2sua!4v1617173837371!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"';
    document.querySelector('.map').append(google);
    document.querySelector('.map').style.visibility = 'visible'


}

document.querySelector('.WhitePalace').onclick = function () {

    google.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.303721230913!2d57.45599141546797!3d-20.246234786427483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c45b2e1364f67%3A0x7991273c5bbcc7ec!2sWhite%20Palace%20Catering%2C%20Event%20Planner%20%26%20Home%20Service!5e0!3m2!1sru!2sua!4v1617173948988!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"';
    document.querySelector('.map').append(google);
    document.querySelector('.map').style.visibility = 'visible'


}

document.querySelector('.buttonLuxuryPlace').onclick = function () {

    google.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.9229655631993!2d-9.10266838420536!3d38.443248279643434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19518a890047bd%3A0xe50d1693a72f329c!2sLuxury%20Place!5e0!3m2!1sru!2sua!4v1617174045751!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"';
    document.querySelector('.map').append(google);
    document.querySelector('.map').style.visibility = 'visible'


}

document.querySelector('.buttonFiveStar').onclick = function () {

    google.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.6991380658105!2d-9.12734488419784!3d38.770604079590434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193247230c687f%3A0x38b29e702b1363cf!2sHotel%20Star%20inn%20Lisbon%20Aeroporto!5e0!3m2!1sru!2sua!4v1617174153019!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"';
    document.querySelector('.map').append(google);
    document.querySelector('.map').style.visibility = 'visible'


}

document.querySelector('.mapClose').onclick = function () {
    google.remove();
    document.querySelector('.map').style.visibility = 'hidden'
}