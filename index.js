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
