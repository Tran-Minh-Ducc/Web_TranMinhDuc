(function () {
  function toast(message) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = message || "Đã cập nhật thành công";
    el.classList.add("show");
    setTimeout(function () { el.classList.remove("show"); }, 2300);
  }

  function closeModals() {
    document.querySelectorAll("dialog").forEach(function (dialog) {
      if (dialog.open) dialog.close();
    });
  }

  document.addEventListener("click", function (e) {
    const modalBtn = e.target.closest("[data-modal]");
    if (modalBtn) {
      const box = document.getElementById(modalBtn.dataset.modal);
      if (box && typeof box.showModal === "function") {
        box.showModal();
      }
    }

    if (e.target.closest("[data-close]")) {
      e.preventDefault();
      closeModals();
    } else if (e.target.tagName === 'DIALOG') {
      const rect = e.target.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        e.target.close();
      }
    }

    const actionBtn = e.target.closest("[data-action]");
    const action = actionBtn ? actionBtn.dataset.action : "";
    
    if (!action) return;
    
    if (action === "menu") {
      const nav = document.getElementById("mainNav");
      if (nav) nav.classList.toggle("open");
    } else if (action === "save") {
      closeModals();
      toast();
    }
  });

  if (localStorage.getItem("cmTheme") === "dark") {
    document.body.classList.add("dark");
  }
})();
