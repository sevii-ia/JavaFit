document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main > article");
  let currentIndex = 0;
  let selectedGender = null; // Guardaremos "male" o "female"

  // Mostrar solo la primera sección
  sections.forEach((section, index) => {
    section.style.display = index === 0 ? "block" : "none";
  });

  // Función para actualizar imágenes según género
  function updateImage(selector, maleSrc, femaleSrc) {
    const element = document.querySelector(selector);
    if (!element) return;

    const img = element.querySelector("img");
    if (!img) return;

    if (selectedGender === "male") {
      img.src = maleSrc;
    } else if (selectedGender === "female") {
      img.src = femaleSrc;
    }
  }

  // Manejar click en los enlaces .routine-item a
  const routineItems = document.querySelectorAll(".routine-item a");
  routineItems.forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault();

      // Capturar género si estamos en la sección de género
      if (sections[currentIndex].classList.contains("routine-gender-section")) {
        // Detectar qué género seleccionó
        if (item.closest(".routine-gender-male")) {
          selectedGender = "male";
        } else if (item.closest(".routine-gender-female")) {
          selectedGender = "female";
        }

        // Actualizar imágenes según género
        updateImage(".routine-body-slim", "assets/img/rutina/cuerpo/delgado-masculino.webp", "assets/img/rutina/cuerpo/delgado-femenino.webp");
        updateImage(".routine-body-average", "assets/img/rutina/cuerpo/promedio-masculino.webp", "assets/img/rutina/cuerpo/promedio-femenino.webp");
        updateImage(".routine-body-large", "assets/img/rutina/cuerpo/grande-masculino.webp", "assets/img/rutina/cuerpo/grande-femenino.webp");
        updateImage(".routine-body-heavy", "assets/img/rutina/cuerpo/pesado-masculino.webp", "assets/img/rutina/cuerpo/pesado-femenino.webp");

        updateImage(".routine-goal-weight-loss", "assets/img/rutina/meta/perder-peso-masculino.webp", "assets/img/rutina/meta/perder-peso-femenino.webp");
        updateImage(".routine-goal-muscle-gain", "assets/img/rutina/meta/ganar-musculo-masculino.webp", "assets/img/rutina/meta/ganar-musculo-femenino.webp");
        updateImage(".routine-goal-body-definition", "assets/img/rutina/meta/definir-cuerpo-masculino.webp", "assets/img/rutina/meta/definir-cuerpo-femenino.webp");
      }

      // Ocultar sección actual
      sections[currentIndex].style.display = "none";

      // Mostrar siguiente sección o mensaje final
      currentIndex++;
      if (currentIndex < sections.length) {
        sections[currentIndex].style.display = "block";
      } else {
        alert("¡Has completado todas las selecciones!");
      }
    });
  });
});
