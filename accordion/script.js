const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion=>{
    accordion.onclick=()=>{
            /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
        accordion.classList.toggle('active');
        var panel= accordion.nextElementSibling;
        if( panel.style.display ==="block"){
            panel.style.display="none";
        }
        else{
            panel.style.display="block";
        }
    }

})