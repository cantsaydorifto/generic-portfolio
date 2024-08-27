const addSkillButton = document.getElementById("add-skill-btn");
const skillsGrid = document.getElementById("skills-grid");
const modalOverlay = document.querySelector(".overlay");
const triggerModalButton = document.getElementById("trigger-modal");
const cancelButton = document.getElementById("close-modal");

triggerModalButton.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  modalOverlay.style.display = "none";
});

document.querySelector(".modal").addEventListener("click", (event) => {
  event.stopPropagation();
});

modalOverlay.addEventListener("click", (event) => {
  modalOverlay.style.display = "none";
});

addSkillButton.addEventListener("click", (event) => {
  event.preventDefault();
  const domain = document.getElementById("domain").value;
  const skillInputs = document.querySelectorAll(".skill-input");
  const proficiencyInputs = document.querySelectorAll(".proficiency-input");

  const newCard = document.createElement("div");
  newCard.classList.add("py-36", "px-48", "bg-white", "flex-col");

  let skillsHTML = "";
  skillInputs.forEach((input, index) => {
    proficiency = Math.floor(
      proficiencyInputs[index].value > 100
        ? 100
        : proficiencyInputs[index].value < 0
        ? 0
        : proficiencyInputs[index].value
    );
    if (input.value && proficiencyInputs[index].value) {
      skillsHTML += `
        <div class="mt-16 mb-5 w-full flex-between">
          <p>${input.value}</p>
          <p>${proficiency} %</p>
        </div>
        <span class="w-full color-bar-container"><span style="width: ${proficiency}%;"></span></span>
      `;
    }
  });

  newCard.innerHTML = `<h4 class="text-dark">${
    domain || "New Skill Category"
  }</h4>${skillsHTML}`;

  skillsGrid.appendChild(newCard);
  modalOverlay.style.display = "none";
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const sideNavbar = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay-side-menu");

hamburgerMenu.addEventListener("click", () => {
  sideNavbar.style.display = "flex";
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => closeSideMenu());

document
  .getElementById("close-side-menu")
  .addEventListener("click", () => closeSideMenu());

function closeSideMenu() {
  sideNavbar.classList.add("slide-out");
  setTimeout(() => {
    sideNavbar.style.display = "none";
    sideNavbar.classList.remove("slide-out");
    overlay.style.display = "none";
  }, 200);
}
