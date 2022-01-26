var htmlelement = document.querySelector('html')
var currentLang = htmlelement.getAttribute('lang')

var languages = document.querySelectorAll('.language')
languages.forEach(item => {
    item.addEventListener('click', setLang)
});

function setLang() {
    var newLang = this.getAttribute('value');
    if (currentLang === newLang) { return };

    htmlelement.setAttribute('lang', newLang);
    currentLang = newLang
    translate(newLang);
}

function translate() {
    console.log(currentLang);
}