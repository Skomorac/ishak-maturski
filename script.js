// Testna poruka u konzoli browsera
console.log("JavaScript je uspješno povezan!");

// 1. Pronalazimo sve linkove u navigaciji i sve sekcije (tabove)
const navLinks = document.querySelectorAll('.nav-links a, .logo');
const tabContents = document.querySelectorAll('.tab-content');

// 2. Prolazimo kroz svaki link i kažemo mu šta da radi kad se klikne
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Sprječavamo browser da "skoči" na ID (što je njegovo normalno ponašanje)
        event.preventDefault();

        // 3. Uklanjamo 'active' klasu sa svih sekcija
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // 4. Uzimamo ID sekcije koju želimo prikazati (npr. #about)
        const targetId = this.getAttribute('href');

        // 5. Pronalazimo tu sekciju i dodajemo joj 'active' klasu da bi se prikazala
        const targetSection = document.querySelector(targetId);
        targetSection.classList.add('active');

        // (Opcionalno) Možemo dodati i stil da se vidi koji je link trenutno aktivan
        navLinks.forEach(l => l.classList.remove('active-link'));
        this.classList.add('active-link');

        console.log("Prikazujem sekciju: " + targetId);
    });
});

// --- KOD ZA HAMBURGER (Mobilni meni) ---
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        // Opcionalno: animacija hamburgera u X
        hamburger.classList.toggle('toggle');
    });
}

// Zatvori meni kada se klikne na neki link (važno za mobilni)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});
