/*Na všech stránkách webu je horní navigace se třemi odkazy. Pro úsporu místa na malých zařízeních se mění na tlačítko s ikonkou hamburgeru. Zařiďte, aby klikání na tlačítko rozbalovalo a opět skrývalo položky menu.
V souboru spolecne.js najděte pomocí document.querySelector prvek s id menu-tlacitko.
Přidejte mu posluchač události kliknutí.
Přidejte prvku s id menu-polozky třídu show ve chvíli, kdy událost nastane.
Rozšiřte kód tak, aby se třída show naopak odebrala, pokud ji prvek již měl.
BonusZměňte ikonku tlačítka na křížek, pokud je menu rozbalené a na hamburger, pokud je sbalené.
HTML ikonky křížku: <i class="fas fa-xmark"></i>HTML ikonky hamburgeru: <i class="fas fa-bars"></i>*/



const tlacitko = document.querySelector("#menu-tlacitko");
const menuItems = document.querySelector("#menu-polozky")
tlacitko.addEventListener("click", () => { 
    tlacitko.classList.toggle("show"); 
    menuItems.classList.toggle("show")
})


/*
document.querySelectorAll(".fas fa-xmark").forEach(tlacitko).addEventListener("click", () => {
     tlacitko.classList.remove("show"); 
     menuItems.classList.toggleremove("show")
    }))

document.querySelectorAll(".fas fa-bars").forEach(tlacitko.addEventListener("click", () => { 
    tlacitko.classList.remove("show"); 
    menuItems.classList.remove("show")
}))
*/
