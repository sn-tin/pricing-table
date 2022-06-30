const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener('click', event => {
        header.classList.toggle("active");
    })    
})