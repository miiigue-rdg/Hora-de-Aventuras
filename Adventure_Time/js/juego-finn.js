document.addEventListener("DOMContentLoaded", function () {
    const mochila = document.getElementById("mochila");
    const espada = document.getElementById("espada");
    const dialogo = document.getElementById("dialogo-finn");

    mochila.addEventListener("click", () => {
        dialogo.textContent = "My backpack has magical snacks and a spare Iron Sword!";
    });

    espada.addEventListener("click", () => {
        dialogo.textContent = "This sword has defeated many enemies! Algebraic!";
    });
});
