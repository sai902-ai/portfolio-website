 let typed = new Typed('#element', {
      strings: ['a Web Developer', 'a Frontend Developer'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    document.getElementById('language').addEventListener('change', function () {
      const lang = this.value;
      document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
      });
    });

    function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('show');
    }

    const isOwner = window.location.search.includes("owner=1");

    window.addEventListener("DOMContentLoaded", () => {
      if (isOwner) {
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.add("mobile-show");
      }
    });

    function enableEditMode() {
      const skills = document.querySelector("#skills .tech-stack");
      const projects = document.querySelector("#projects .project-wrap");

      if (skills && projects) {
        skills.contentEditable = true;
        projects.contentEditable = true;
        skills.style.border = "2px dashed #c404ff";
        projects.style.border = "2px dashed #c404ff";
        alert("📝 Edit mode enabled. You can now edit Skills and Projects!");
      }
    }