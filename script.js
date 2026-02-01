const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

// Tamaño inicial del botón "Sí"
let yesSize = 1; // escala 1 = 100%

// Mover el botón "No" indefinidamente al acercar el cursor
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Hacer que el botón "Sí" crezca un poquito cada vez
  yesSize += 0.05; // aumenta 5% cada vez
  yesBtn.style.transform = `scale(${yesSize})`;
});

// Mensaje romántico al hacer clic en "Sí"
yesBtn.addEventListener("click", () => {
  message.innerHTML = "Sabía que dirías que sí, te amo 💕";
});
