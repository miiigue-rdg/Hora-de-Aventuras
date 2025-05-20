document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quizForm");
  const resultado = document.getElementById("quizResultado");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recargar la página

    // Respuestas correctas
    const respuestas = {
      q1: "a", // Finn Mertens
      q2: "b", // Bajo eléctrico
      q3: "a", // Simon Petrikov
    };

    let puntaje = 0;
    let sinResponder = false;

    for (let pregunta in respuestas) {
      const seleccionada = form.querySelector(`input[name="${pregunta}"]:checked`);
      if (!seleccionada) {
        sinResponder = true;
        break;
      }
      if (seleccionada.value === respuestas[pregunta]) {
        puntaje++;
      }
    }

    if (sinResponder) {
      resultado.innerHTML = `<div class="alert alert-warning">Por favor, responde todas las preguntas.</div>`;
      return;
    }

    // Mostrar resultado
    let mensaje = "";
    if (puntaje === 3) {
      mensaje = "¡Eres un verdadero fan de Hora de Aventuras! 🏆";
    } else if (puntaje === 2) {
      mensaje = "¡Casi perfecto! 😎";
    } else {
      mensaje = "Sigue viendo la serie, ¡te queda camino por recorrer! 🍭";
    }

    resultado.innerHTML = `
      <div class="alert alert-info">
        Has obtenido <strong>${puntaje}/3</strong>. ${mensaje}
      </div>
    `;
  });
});