
var ls = localStorage.getItem("lang")

var htmlelement = document.querySelector('html')
var currentLang = htmlelement.getAttribute('lang')



ls !== null ? currentLang = ls : '';
translate()

var languages = document.querySelectorAll('.language')
languages.forEach(item => {
    item.getAttribute('value') == currentLang ? item.classList.add('current') : '';
    item.addEventListener('click', () => setLang(item))
});

function setLang(item) {
    languages.forEach(item => {
        item.classList.remove('current')
    })
    item.classList.toggle('current')

    var newLang = item.getAttribute('value');
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


var toggleFormBtn = document.querySelectorAll('.toggleForm')

toggleFormBtn.forEach(item => {
    item.addEventListener('click', formToggle)
})

function formToggle() {
    document.querySelector('.modal').classList.toggle('hidden')
}


