
const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const header = document.getElementsByTagName('header')[0]
    const yearSpan = document.getElementById('year')
    const cards = document.getElementsByClassName('card')

    //adding current year to footer
    const today = new Date()
    const year = today.getFullYear()

    yearSpan.setAttribute("datetime", year)
    yearSpan.textContent = year
    //yearSpan.innerText = year

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

    //init emailjs (with sendgrid)
    //   const initEmail = () => {
    //       emailjs.init(env.EMAIL_PUBLIC_KEY);
    //   }

    //   initEmail()

    const contactForm = document.getElementById('contactForm')
    const submitButton = document.getElementById('submitButton')

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault()

        submitButton.disabled = true

        // const serviceID = env.EMAIL_SERVICE_ID
        // const templateID = env.EMAIL_TEMPLATE_ID

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const data = { name, email, message };

        // Send request to API
        try {
            const response = await fetch(`${env.NODE_ENV === "production" ? "https://sendemailapi-se49.onrender.com" : "http://localhost:3500"}/sendEmail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Failed to send email");
            }

            //const result = await response.json();
            //console.log(result);
            contactForm.reset()
            submitButton.disabled = false
            // Show success message
            alert("Votre message a bien été envoyé!");
        } catch (error) {
            console.error(error);
            submitButton.disabled = false
            // Show error message
            alert("Erreur d'envoi du message...");
        }
    })

}

document.addEventListener('DOMContentLoaded', initApp)