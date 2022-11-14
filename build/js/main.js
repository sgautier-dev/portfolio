const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const header = document.getElementsByTagName('header')[0]

    const yearSpan = document.getElementById('year')
    const today = new Date()
    const year = today.getFullYear()

    const scrollTrigger = 60;

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)

    yearSpan.innerText = year

    document.addEventListener('scroll', (e) => {
        window.scrollY >= scrollTrigger ? header.classList.add('opacity-90') : header.classList.remove('opacity-90')
    })

}

document.addEventListener('DOMContentLoaded', initApp)