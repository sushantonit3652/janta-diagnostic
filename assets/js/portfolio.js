/**
 * ====================================================================
 * SUSHANT THAKUR - PORTFOLIO INTERACTIVE CONTROLLER
 * ====================================================================
 * Manages theme toggle, project filtering, modal case studies,
 * resume downloads, dynamic data hydration, and valid form submission.
 * ====================================================================
 */

(function () {
  "use strict";

  // ------------------------------------------------------------------
  // 1. Theme Toggle (Dark Navy / Light Mode)
  // ------------------------------------------------------------------
  const STORAGE_KEY = "sushant_portfolio_theme";

  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Default to dark navy developer theme unless user explicitly chose light
    const activeTheme = savedTheme || "dark";
    applyTheme(activeTheme);

    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme") || "dark";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
      });
    });
  }

  function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    const icons = document.querySelectorAll(".theme-toggle-icon");
    icons.forEach(icon => {
      if (theme === "dark") {
        icon.classList.remove("bi-moon-stars-fill");
        icon.classList.add("bi-sun-fill");
        icon.setAttribute("title", "Switch to Light Mode");
      } else {
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-stars-fill");
        icon.setAttribute("title", "Switch to Dark Mode");
      }
    });
  }

  // ------------------------------------------------------------------
  // 2. Project Filtering
  // ------------------------------------------------------------------
  function initProjectFilters() {
    const filterBtns = document.querySelectorAll(".project-filters .filter-btn");
    const projectCards = document.querySelectorAll(".project-card-col");

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        // Toggle active button
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const targetCategory = btn.getAttribute("data-filter");

        projectCards.forEach(col => {
          const cardCategories = (col.getAttribute("data-category") || "").split(" ");
          if (targetCategory === "all" || cardCategories.includes(targetCategory)) {
            col.style.display = "block";
            setTimeout(() => {
              col.style.opacity = "1";
              col.style.transform = "translateY(0)";
            }, 20);
          } else {
            col.style.opacity = "0";
            col.style.transform = "translateY(15px)";
            setTimeout(() => {
              col.style.display = "none";
            }, 200);
          }
        });
      });
    });
  }

  // ------------------------------------------------------------------
  // 3. Project Case Study Modal
  // ------------------------------------------------------------------
  function initCaseStudyModal() {
    const modalEl = document.getElementById("projectModal");
    if (!modalEl) return;

    const modal = new bootstrap.Modal(modalEl);

    document.querySelectorAll(".btn-open-case-study").forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const projectId = this.getAttribute("data-project-id");
        populateAndOpenModal(projectId, modal);
      });
    });
  }

  function populateAndOpenModal(projectId, modalInstance) {
    if (!window.PORTFOLIO_DATA || !window.PORTFOLIO_DATA.projects) return;

    const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById("modalProjectTitle").textContent = project.title;
    document.getElementById("modalProjectTagline").textContent = project.tagline;
    document.getElementById("modalProjectCategory").textContent = project.categoryLabel;

    // Media
    const modalImg = document.getElementById("modalProjectImage");
    if (modalImg) {
      modalImg.src = project.image;
      modalImg.alt = project.title + " Concept Mockup";
    }

    // Tech stack badges
    const techContainer = document.getElementById("modalProjectTech");
    if (techContainer) {
      techContainer.innerHTML = project.technologies
        .map(t => `<span class="tech-badge me-1 mb-1">${t}</span>`)
        .join("");
    }

    // Description & Case Study details
    document.getElementById("modalProjectDesc").textContent = project.shortDescription;
    document.getElementById("modalProjectContrib").textContent = project.myContribution;

    if (project.caseStudy) {
      document.getElementById("modalProjectProblem").textContent = project.caseStudy.problem;
      document.getElementById("modalProjectSolution").textContent = project.caseStudy.solution;
      document.getElementById("modalProjectArchitecture").textContent = project.caseStudy.architecture;
      document.getElementById("modalProjectResults").textContent = project.caseStudy.keyResults;
    }

    // Highlights list
    const highlightsContainer = document.getElementById("modalProjectHighlights");
    if (highlightsContainer && project.highlights) {
      highlightsContainer.innerHTML = project.highlights
        .map(h => `<li class="mb-2 text-muted"><i class="bi bi-check2-circle text-primary me-2"></i>${h}</li>`)
        .join("");
    }

    // Store Action Buttons inside modal
    const storeActionContainer = document.getElementById("modalStoreAction");
    if (storeActionContainer) {
      if (project.storeType === "dual") {
        storeActionContainer.innerHTML = `
          <div class="d-flex gap-2">
            <a href="${project.iosUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-dark border border-secondary text-white">
              <i class="fa-brands fa-apple me-1"></i> App Store
            </a>
            <a href="${project.androidUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-dark border border-secondary text-white">
              <i class="fa-brands fa-google-play me-1" style="color: #10b981;"></i> Google Play
            </a>
          </div>
        `;
      } else if (project.storeType === "apple" && project.storeUrl) {
        storeActionContainer.innerHTML = `
          <a href="${project.storeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-dark border border-secondary text-white">
            <i class="fa-brands fa-apple me-1"></i> View on App Store
          </a>
        `;
      } else if (project.storeType === "google" && project.storeUrl) {
        storeActionContainer.innerHTML = `
          <a href="${project.storeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-dark border border-secondary text-white">
            <i class="fa-brands fa-google-play me-1" style="color: #10b981;"></i> View on Google Play
          </a>
        `;
      } else {
        storeActionContainer.innerHTML = "";
      }
    }

    modalInstance.show();
  }

  // ------------------------------------------------------------------
  // 4. Resume Download Handler
  // ------------------------------------------------------------------
  function initResumeDownload() {
    const resumeBtns = document.querySelectorAll(".btn-download-resume");
    const resumePath = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.profile && window.PORTFOLIO_DATA.profile.resumeUrl) 
      ? window.PORTFOLIO_DATA.profile.resumeUrl 
      : "assets/resume/Sushant_Thakur_Resume.pdf";

    resumeBtns.forEach(btn => {
      btn.setAttribute("href", resumePath);
      btn.setAttribute("download", "Sushant_Thakur_Resume.pdf");
      btn.addEventListener("click", function (e) {
        console.log("Downloading resume from:", resumePath);
      });
    });
  }

  // ------------------------------------------------------------------
  // 5. Contact Form Validation & Real Submission Handler
  // ------------------------------------------------------------------
  function initContactForm() {
    const form = document.getElementById("portfolioContactForm");
    if (!form) return;

    const feedbackEl = document.getElementById("contactFormFeedback");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const name = (form.querySelector('[name="name"]').value || "").trim();
      const email = (form.querySelector('[name="email"]').value || "").trim();
      const subject = (form.querySelector('[name="subject"]').value || "").trim();
      const message = (form.querySelector('[name="message"]').value || "").trim();
      const submitBtn = form.querySelector('button[type="submit"]');

      // Validation Rules
      if (name.length < 2) {
        showFeedback(feedbackEl, "error", "Please provide a valid name (at least 2 characters).");
        form.querySelector('[name="name"]').focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFeedback(feedbackEl, "error", "Please provide a valid email address so I can respond to you.");
        form.querySelector('[name="email"]').focus();
        return;
      }

      if (subject.length < 3) {
        showFeedback(feedbackEl, "error", "Please enter a subject (minimum 3 characters).");
        form.querySelector('[name="subject"]').focus();
        return;
      }

      if (message.length < 10) {
        showFeedback(feedbackEl, "error", "Please enter a message of at least 10 characters detailing your inquiry.");
        form.querySelector('[name="message"]').focus();
        return;
      }

      // UI Loading state
      submitBtn.disabled = true;
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...';
      showFeedback(feedbackEl, "info", "Sending your message...");

      const payload = { name, email, subject, message };

      // Attempt submission via serverless api/contact or FormSubmit
      let sentSuccess = false;

      try {
        const response = await fetch("api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          sentSuccess = true;
        }
      } catch (err) {
        console.warn("Direct API call unavailable (likely static/local testing environment):", err);
      }

      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;

      if (sentSuccess) {
        form.reset();
        showFeedback(
          feedbackEl,
          "success",
          `<strong>Thank you, ${name}!</strong> Your message has been received. I will get back to you shortly at ${email}.`
        );
      } else {
        // Honest fallback: Provide direct email / WhatsApp buttons so the user is NEVER lied to with fake success
        const mailtoLink = `mailto:${window.PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          `Hi Sushant,\n\nMy name is ${name} (${email}).\n\n${message}`
        )}`;

        const whatsappText = encodeURIComponent(
          `Hello Sushant,\nI saw your React Native Developer portfolio.\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`
        );

        showFeedback(
          feedbackEl,
          "info",
          `<div>
            <div class="fw-bold mb-1"><i class="bi bi-info-circle-fill me-1"></i> Ready to connect!</div>
            <div class="small mb-2">Because this static preview doesn't have an active mail server attached, click below to send your message directly via email or WhatsApp:</div>
            <div class="d-flex flex-wrap gap-2 mt-2">
              <a href="${mailtoLink}" class="btn btn-sm btn-primary fw-semibold px-3 py-1 text-white">
                <i class="bi bi-envelope-fill me-1"></i> Send via Email Client
              </a>
              <a href="https://wa.me/919876543210?text=${whatsappText}" target="_blank" class="btn btn-sm btn-success fw-semibold px-3 py-1">
                <i class="bi bi-whatsapp me-1"></i> Open in WhatsApp
              </a>
            </div>
          </div>`
        );
      }
    });
  }

  function showFeedback(el, type, html) {
    if (!el) return;
    el.className = "form-feedback-msg";
    if (type === "error") el.classList.add("feedback-error");
    else if (type === "success") el.classList.add("feedback-success");
    else el.classList.add("feedback-info");
    el.innerHTML = html;
    el.style.display = "block";
  }

  // ------------------------------------------------------------------
  // 6. Smooth Scrolling for all in-page hash anchors
  // ------------------------------------------------------------------
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const hash = this.getAttribute("href");
        if (hash === "#" || hash === "") return;
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector("#header") ? document.querySelector("#header").offsetHeight : 70;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });

          // Close mobile menu if active
          if (document.body.classList.contains("mobile-nav-active")) {
            document.body.classList.remove("mobile-nav-active");
            const toggle = document.querySelector(".mobile-nav-toggle");
            if (toggle) {
              toggle.classList.toggle("bi-list");
              toggle.classList.toggle("bi-x");
            }
          }
        }
      });
    });
  }

  // ------------------------------------------------------------------
  // DOM Ready Initializer
  // ------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initProjectFilters();
    initCaseStudyModal();
    initResumeDownload();
    initContactForm();
    initSmoothScroll();
  });
})();
