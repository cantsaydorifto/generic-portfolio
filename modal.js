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

window.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});

addSkillButton.addEventListener("click", () => {
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
        <span class="w-full color-bar-container"><span></span></span>
      `;
    }
  });

  newCard.innerHTML = `<h4 class="text-dark">${
    domain || "New Skill Category"
  }</h4>${skillsHTML}`;

  skillsGrid.appendChild(newCard);
  modalOverlay.style.display = "none";
});
