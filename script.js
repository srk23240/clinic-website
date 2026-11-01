
// ========================================
// CAREPOINT MEDICAL CLINIC
// JavaScript
// ========================================

// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "×" : "☰";
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// 2. AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 3. APPOINTMENT FORM DEMO

const appointmentForm = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

if (appointmentForm && formMessage) {
    appointmentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const patientName = document.getElementById("patientName").value.trim();
        const patientPhone = document.getElementById("patientPhone").value.trim();

        if (!patientName || !patientPhone) {
            formMessage.textContent = "Please complete the required fields.";
            return;
        }

        formMessage.textContent =
            "Thanks! This is a demo form. No appointment request has been sent.";

        appointmentForm.reset();
    });
}
