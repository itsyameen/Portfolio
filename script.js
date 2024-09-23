//  toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links 
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for Animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animate footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}



const contactForm = document.querySelector('form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    successMessage.style.display = 'block';
    successMessage.style.textAlign = 'center'; // Add this line to center the text
    successMessage.innerHTML = 'Thank you for submitting your message! Please wait for 24 hours for a response.';

    // Reset the form fields
    contactForm.reset();

    // Hide the success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000); // 5000 milliseconds = 5 seconds
});

