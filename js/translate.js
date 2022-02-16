
let ls = localStorage.getItem("lang")
let htmlelement = document.querySelector('html')
let languages = document.querySelectorAll('.language')
let currentLang = htmlelement.getAttribute('lang')

ls !== null ? currentLang = ls : '';
translate()

languages.forEach(item => {
    item.getAttribute('value') == currentLang ? item.classList.add('current') : '';
    item.addEventListener('click', () => setLang(item))
});




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
    var facilitiesDesc = document.querySelectorAll('.facilityDesc')

    for (let i = 0; i < facilitiesDesc.length; i++) {
        facilitiesDesc[i].innerHTML = facilitiesDesc[i].innerHTML.substring(0, 120) + '...';
    }
}
