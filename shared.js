/* REMA Storen AG — gemeinsames Verhalten für alle Seiten */
(function () {
  "use strict";

  /* ---------- Nav: Scroll-Status + Mobile Menü ---------- */
  function initNav() {
    var nav = document.getElementById("site-nav");
    var burger = document.getElementById("nav-burger");
    var menu = document.getElementById("mobile-menu");

    if (nav) {
      var onScroll = function () {
        if (window.scrollY > 8) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    if (burger && menu) {
      burger.addEventListener("click", function () {
        var open = menu.classList.toggle("open");
        burger.classList.toggle("open", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        menu.setAttribute("aria-hidden", open ? "false" : "true");
        document.body.style.overflow = open ? "hidden" : "";
      });
      menu.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          menu.classList.remove("open");
          burger.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
          menu.setAttribute("aria-hidden", "true");
          document.body.style.overflow = "";
        });
      });
    }
  }

  /* Reveal-Animation läuft rein über CSS, kein JS notwendig. */

  /* ---------- Referenzen Filter (nur auf Referenzen-Seite) ---------- */
  function initRefFilter() {
    var filters = document.querySelectorAll(".ref-filters .filter");
    var cards = document.querySelectorAll(".ref-grid > .ref-card");
    if (!filters.length || !cards.length) return;

    filters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var cat = btn.getAttribute("data-cat");
        filters.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle("active", on);
          b.setAttribute("aria-selected", on ? "true" : "false");
        });
        cards.forEach(function (card) {
          var c = card.getAttribute("data-cat");
          var show = cat === "alle" || c === cat;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---------- Kontakt-Formular ---------- */
  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var success = document.getElementById("form-success");
    var successName = document.getElementById("form-success-name");
    var successEmail = document.getElementById("form-success-email");
    var resetBtn = document.getElementById("form-reset");

    function clearErrors() {
      form.querySelectorAll(".field.err").forEach(function (f) { f.classList.remove("err"); });
    }
    function setError(name, msg) {
      var field = form.querySelector('[data-field="' + name + '"]');
      if (!field) return;
      field.classList.add("err");
      var em = field.querySelector(".err-msg");
      if (em) em.textContent = msg;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var email = (data.get("email") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();
      var ok = true;
      if (!name) { setError("name", "Bitte Name angeben."); ok = false; }
      if (!email) { setError("email", "Bitte E-Mail angeben."); ok = false; }
      else if (!/^\S+@\S+\.\S+$/.test(email)) { setError("email", "Ungültige E-Mail-Adresse."); ok = false; }
      if (!message) { setError("message", "Bitte kurz Ihr Projekt beschreiben."); ok = false; }
      if (!ok) return;

      if (successName) successName.textContent = name.split(" ")[0];
      if (successEmail) successEmail.textContent = email;
      form.style.display = "none";
      if (success) success.style.display = "block";
      window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 120, behavior: "smooth" });
    });

    /* Checkbox Style Toggle */
    form.querySelectorAll(".check input").forEach(function (cb) {
      var label = cb.closest(".check");
      cb.addEventListener("change", function () {
        label.classList.toggle("on", cb.checked);
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        form.reset();
        form.querySelectorAll(".check.on").forEach(function (l) { l.classList.remove("on"); });
        clearErrors();
        form.style.display = "";
        if (success) success.style.display = "none";
      });
    }
  }

  /* ---------- Aktuelles Jahr im Footer ---------- */
  function initYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initRefFilter();
    initContactForm();
    initYear();
  });
})();
