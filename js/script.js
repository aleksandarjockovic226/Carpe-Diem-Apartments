
let ls = localStorage.getItem("lang")
let htmlelement = document.querySelector('html')
let currentLang = htmlelement.getAttribute('lang')
let toggleFormBtn = document.querySelectorAll('.toggleForm')
let toggleFormArrow = document.querySelector('.arrow')
let languages = document.querySelectorAll('.language')
let modal = document.querySelector('.modal')

ls !== null ? currentLang = ls : '';
translate()

languages.forEach(item => {
    item.getAttribute('value') == currentLang ? item.classList.add('current') : '';
    item.addEventListener('click', () => setLang(item))
});

toggleFormBtn.forEach(item => {
    item.addEventListener('click', formToggle)
})

function setLang(item) {
    languages.forEach(item => {
        item.classList.remove('current')
    })
    item.classList.toggle('current')

    let newLang = item.getAttribute('value');
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

function formToggle() {
    modal.classList.toggle('hidden')
    modal.classList.contains('hidden') ? modal.style.display = "none" : modal.style.display = "grid"
    toggleFormArrow.classList.toggle('change-direction')
}


