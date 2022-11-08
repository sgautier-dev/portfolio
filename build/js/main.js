const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

const displayCurrentYear = () => {
    const yearSpan = document.getElementById('year')
    const today = new Date()
    const year = today.getFullYear()

    yearSpan.innerText = year
}

document.addEventListener('DOMContentLoaded', initApp)
document.addEventListener('DOMContentLoaded', displayCurrentYear)