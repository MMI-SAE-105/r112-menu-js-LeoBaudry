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
        nav.ariaHidden = true;
        toggle.ariaExpanded = "false";
    } else {
        nav.ariaHidden = false;
        toggle.ariaExpanded = "true";
    }
}); 