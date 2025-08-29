const hamburgerMenu = document.getElementById('bars')
const modal = document.getElementById('modal')
const closeHam = document.getElementById('modal-close-btn')

hamburgerMenu.addEventListener('click', () => {
    modal.style.display = 'block'
})

closeHam.addEventListener('click', () => {
    modal.style.display = 'none'
})
