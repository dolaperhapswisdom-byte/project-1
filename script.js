const mainCan = document.getElementById("mainCan");
const mainFlavor = document.getElementById("mainFlavor");
const choices = document.querySelectorAll(".choice");
const hero = document.querySelector(".hero");

const flavors = {
  red: {
    name: "RED",
    edition: "01 / RED EDITION",
    accent: "#ff2020",
    glow: "rgba(255, 20, 20, .65)",
    can: "#c50012",
    light: "#ff6a72",
    dark: "#59000a",
    canGlow: "#ff1010"
  },
  gold: {
    name: "GOLD",
    edition: "02 / GOLD EDITION",
    accent: "#ffc000",
    glow: "rgba(255, 190, 0, .65)",
    can: "#e7a900",
    light: "#ffe98b",
    dark: "#805000",
    canGlow: "#ffb900"
  },
  purple: {
    name: "GRAPE",
    edition: "03 / GRAPE EDITION",
    accent: "#bd40ff",
    glow: "rgba(180, 0, 255, .65)",
    can: "#7200bd",
    light: "#e59bff",
    dark: "#30004e",
    canGlow: "#bd00ff"
  }
};

function changeFlavor(flavor) {
  const product = flavors[flavor];

  if (!product) return;

  mainCan.style.setProperty("--can", product.can);
  mainCan.style.setProperty("--can-light", product.light);
  mainCan.style.setProperty("--can-dark", product.dark);
  mainCan.style.setProperty("--can-glow", product.canGlow);

  hero.style.setProperty("--accent", product.accent);
  hero.style.setProperty("--glow", product.glow);

  mainFlavor.textContent = product.name;
  document.getElementById("edition").textContent = product.edition;
  document.getElementById("productName").textContent =
    "STING " + product.name;
  document.getElementById("flavor").textContent =
    product.name === "RED"
      ? "BOLD • CLASSIC • ENERGY"
      : product.name === "GOLD"
      ? "BRIGHT • FRESH • VIBRANT"
      : "COOL • SMOOTH • UNIQUE";

  choices.forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.flavor === flavor
    );
  });

  mainCan.animate(
    [
      { transform: "translateX(-50%) translateY(20px) scale(.9)" },
      { transform: "translateX(-50%) translateY(-12px) scale(1.12)" }
    ],
    {
      duration: 550,
      easing: "ease-out"
    }
  );
}

choices.forEach(button => {
  button.addEventListener("click", () => {
    changeFlavor(button.dataset.flavor);
  });
});

document.getElementById("nextButton")?.addEventListener("click", () => {
  const active = document.querySelector(".choice.active");
  const current = [...choices].indexOf(active);
  const next = (current + 1) % choices.length;

  changeFlavor(choices[next].dataset.flavor);
});