// ==========================================
// ANNIVERSARY DATE
// ==========================================

// Format:
// Tahun, Bulan-1, Tanggal

const anniversaryDate = new Date(2026, 11, 9);


// ==========================================
// ELANG BIRTHDAY
// ==========================================

const elangBirthday = new Date(2026, 1, 2);


// ==========================================
// RACHEL BIRTHDAY
// ==========================================

const rachelBirthday = new Date(2026, 12, 9);


// ==========================================
// COUNTDOWN FUNCTION
// ==========================================

function updateCountdown(targetDate, elementId) {

    const now = new Date();

    let distance = targetDate - now;

    // Jika tanggal sudah lewat
    if (distance < 0) {

        targetDate.setFullYear(now.getFullYear() + 1);

        distance = targetDate - now;
    }

    // ==========================================
    // TIME CALCULATION
    // ==========================================

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    // ==========================================
    // DISPLAY TO HTML
    // ==========================================

    document.getElementById(elementId).innerHTML =
    `
        ${days} Days <br>
        ${hours} Hours 
        ${minutes} Minutes 
        ${seconds} Seconds
    `;
}


// ==========================================
// UPDATE EVERY SECOND
// ==========================================

setInterval(() => {

    // Anniversary
    updateCountdown(
        anniversaryDate,
        "anniversary-countdown"
    );

    // Elang Birthday
    updateCountdown(
        elangBirthday,
        "elang-birthday-countdown"
    );

    // Rachel Birthday
    updateCountdown(
        rachelBirthday,
        "rachel-birthday-countdown"
    );

}, 1000);


// ==========================================
// SMOOTH SCROLL NAVBAR
// ==========================================

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// ==========================================
// FADE IN ANIMATION WHEN SCROLL
// ==========================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        const triggerPoint =
            window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {

            section.classList.add("show");

        }

    });

});

// ==========================================
// BACKGROUND MUSIC
// ==========================================

const music = document.getElementById("bg-music");

// Browser biasanya butuh interaksi user dulu
document.addEventListener("click", () => {

    music.play();

}, { once: true });