// Aggiunge uno scroll suave ai link del menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Previene il comportamento predefinito del link
        const targetId = this.getAttribute('href').substring(1); // Ottiene l'id della sezione
        const targetSection = document.getElementById(targetId);

        console.log('Link cliccato:', targetId); // Log per il link cliccato

        if (targetSection) { // Verifica che la sezione esista
            console.log('Scorro verso la sezione:', targetId); // Log per confermare la sezione
            targetSection.scrollIntoView({
                behavior: 'smooth' // Scroll fluido
            });
        } else {
            console.error('Errore: sezione non trovata per ID:', targetId); // Log di errore
        }
    });
});

// Evidenzia la sezione attiva nel menu durante lo scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Verifica se la sezione è attualmente visibile
        if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    console.log('Sezione visibile:', currentSection); // Log per la sezione visibile

    // Aggiorna lo stato attivo dei link nel menu
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
            console.log('Link attivo aggiornato:', link.getAttribute('href')); // Log per il link attivo
        }
    });
});

// Aggiunge un toggle per il tema scuro
const toggleThemeBtn = document.getElementById('toggle-theme');
const themeIcon = toggleThemeBtn.querySelector('.icon');

if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener('click', () => {
        console.log('Pulsante cliccato!'); // Log per verificare il clic
        document.body.classList.toggle('dark-theme');

        // Cambia l'icona in base al tema attuale
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.textContent = "🌙"; // Luna per il tema scuro
        } else {
            themeIcon.textContent = "🌞"; // Sole per il tema chiaro
        }
    });
} else {
    console.error('Pulsante per il tema non trovato.');
}

// Consente di modificare il testo di un paragrafo
document.querySelectorAll('section p').forEach(paragraph => {
    paragraph.addEventListener('click', () => {
        console.log('Paragrafo selezionato per modifica:', paragraph.textContent); // Log per il paragrafo selezionato
        const newText = prompt('Modifica il testo:', paragraph.textContent);
        if (newText !== null) {
            paragraph.textContent = newText;
            console.log('Nuovo testo del paragrafo:', newText); // Log per il nuovo testo
        }
    });
});
