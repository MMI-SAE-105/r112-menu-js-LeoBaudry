// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");  
const nav = document.querySelector(".menu");  

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);

// Boucle if pour vérifier si, lorsqu'on click, le menu est ouvert ou fermé, et donc pour
// interchanger son état.

       if (isOpen) {
        nav.setAttribute("aria-hidden", "true");  // Cache le menu
        toggle.setAttribute("aria-expanded", "false");  // Indique que le menu est fermé
        document.body.classList.remove('noscroll');  // Retire la classe 'noscroll'
    } else {
        nav.setAttribute("aria-hidden", "false");  // Affiche le menu
        toggle.setAttribute("aria-expanded", "true");  // Indique que le menu est ouvert
        document.body.classList.add('noscroll');  // Ajoute la classe 'noscroll'
    }
});
