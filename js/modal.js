let toggleFormBtn = document.querySelectorAll('.toggleForm')
let toggleFormArrow = document.querySelector('.arrow')
let modal = document.querySelector('.modal')

toggleFormBtn.forEach(item => {
    item.addEventListener('click', formToggle)
})

function formToggle() {
    modal.classList.toggle('hidden')
    modal.classList.contains('hidden') ? modal.style.display = "none" : modal.style.display = "grid"
    toggleFormArrow.classList.toggle('change-direction')
}


