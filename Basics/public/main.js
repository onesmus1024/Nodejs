

var home = document.querySelector('.home');
let change = true;
setInterval(() => {
    if (change) {

        home.style.backgroundImage = "url('/images/background2.jpeg')";
        change = false;
    } else {
        home.style.backgroundImage = "url('/images/background.jpeg')";
        change = true;
    }
}, 10000);