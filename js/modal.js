// Modal handling
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("changePasswordModal");
  const openBtn = document.getElementById("changePasswordBtn");
  const closeBtn = document.getElementById("closeModal");
  const cancelBtn = document.getElementById("cancelBtn");
  const form = document.getElementById("changePasswordForm");

  if (!modal || !openBtn) return;

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  function closeModal() {
    modal.classList.remove("active");
    if (form) form.reset();
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newPassword = document.getElementById("newPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (newPassword !== confirmPassword) {
        alert("Nowe hasła nie są identyczne!");
        return;
      }

      // Tutaj można dodać logikę wysyłania do backendu
      alert("Hasło zostało zmienione pomyślnie!");
      closeModal();
    });
  }
});
