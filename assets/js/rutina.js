document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todas las secciones principales
  const sections = document.querySelectorAll("main > article");
  let currentIndex = 0;

  // Ocultamos todas menos la primera
  sections.forEach((section, index) => {
    section.style.display = index === 0 ? "block" : "none";
  });

  // Añadimos un listener a todos los enlaces dentro de .routine-item
  const routineItems = document.querySelectorAll(".routine-item a");
  routineItems.forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault(); // Evitamos que el enlace recargue la página

      // Ocultamos la sección actual
      sections[currentIndex].style.display = "none";

      // Mostramos la siguiente sección si existe
      currentIndex++;
      if (currentIndex < sections.length) {
        sections[currentIndex].style.display = "block";
      } else {
        // Si ya no hay más secciones, mostramos un mensaje final (opcional)
        alert("¡Has completado todas las selecciones!");
      }
    });
  });
});
