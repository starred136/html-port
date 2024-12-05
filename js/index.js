document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const selectedLanguage = document.querySelector(".selected-language");
    const options = document.querySelector(".dropdown-options");
  
    // Affiche ou masque les options
    dropdown.addEventListener("click", () => {
      options.style.display = options.style.display === "block" ? "none" : "block";
    });
  
    // Sélectionne une langue
    document.querySelectorAll(".option").forEach((option) => {
      option.addEventListener("click", (event) => {
        const language = event.target.getAttribute("data-value");
        selectedLanguage.textContent = event.target.textContent;
        options.style.display = "none"; // Masquer les options après sélection
        console.log(`Langue sélectionnée : ${language}`);
      });
    });
  
    // Ferme le dropdown lorsqu'on clique ailleurs
    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
        options.style.display = "none";
      }
    });
  });
  