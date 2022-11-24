const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const header = document.getElementsByTagName('header')[0]
    const yearSpan = document.getElementById('year')
    const cards = document.getElementsByClassName('card')
    
    //adding current year to footer
    const today = new Date()
    const year = today.getFullYear()

    yearSpan.innerText = year

    //toggling menu on click
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)

    //adding opacity on header on window scroll
    const scrollTrigger = 60;

    document.addEventListener('scroll', (e) => {
        window.scrollY >= scrollTrigger ? header.classList.add('bg-primary/80', 'backdrop-blur-sm') : header.classList.remove('bg-primary/80', 'backdrop-blur-sm')
    })

    //adding flipping rotation on cards on click
    Array.from(cards).forEach(element => {
        element.addEventListener('click', e => {
            element.classList.toggle('cust-rotate-y-180')
        })
    })
}

document.addEventListener('DOMContentLoaded', initApp)