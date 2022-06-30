const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener('click', event => {
        header.classList.toggle("active");
        const accordionBody = accordionHeaders.parentNode.nextElementSibling;
        if(accordionHeaders.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0;
        }
    })    
})