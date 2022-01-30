document.addEventListener('DOMContentLoaded', function () {

    var ls = localStorage.getItem("lang")

    var htmlelement = document.querySelector('html')
    var currentLang = htmlelement.getAttribute('lang')

    ls !== null ? currentLang = ls : '';
    translate()

    var languages = document.querySelectorAll('.language')
    languages.forEach(item => {
        item.addEventListener('click', setLang)
    });

    function setLang() {
        var newLang = this.getAttribute('value');
        if (currentLang === newLang) { return };

        htmlelement.setAttribute('lang', newLang);
        currentLang = newLang
        localStorage.setItem("lang", newLang);
        translate(newLang);
    }

    async function translate() {
        const response = await fetch('http://localhost:5500/data/content.json')
        const data = await response.json();

        htmlelement.querySelectorAll('[data-key]').forEach(element => {
            let key = element.getAttribute('data-key')
            element.textContent = data[currentLang][key]
        })
    }
})