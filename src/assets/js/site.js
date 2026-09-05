(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  if (window.GLightbox) {
    window.GLightbox({ selector: ".glightbox", touchNavigation: true, loop: true });
  }

  var filterButtons = document.querySelectorAll("[data-gallery-filter]");
  var galleryItems = document.querySelectorAll("[data-gallery-category]");
  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var cat = btn.getAttribute("data-gallery-filter");
        filterButtons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        galleryItems.forEach(function (item) {
          var show = cat === "all" || item.getAttribute("data-gallery-category") === cat;
          item.hidden = !show;
        });
      });
    });
  }
})();
