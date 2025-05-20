document.addEventListener("DOMContentLoaded", function () {
    const mochila = document.getElementById("mochila");
    const espada = document.getElementById("espada");
    const dialogo = document.getElementById("dialogo-finn");

    mochila.addEventListener("click", () => {
        dialogo.textContent = "Finn: ¡Mi mochila tiene bocadillos mágicos y la Espada de Hierro de repuesto!";
    });

    espada.addEventListener("click", () => {
        dialogo.textContent = "Finn: ¡Esta espada ha vencido a muchos enemigos! ¡Algebraico!";
    });
});
