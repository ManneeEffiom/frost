document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById('bookingModal');
    const closeModal = document.querySelector('.close-modal');
    const bookButtons = document.querySelectorAll('.book-btn');
    const eventTiles = document.querySelectorAll('.event-tile');
    const toggleBtn = document.getElementById('darkModeToggle');

    /* =========================
       BOOK BUTTON → EXTERNAL LINK
    ========================== */
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();

            const tile = this.closest('.event-tile');
            const link = tile.getAttribute('data-link');

            if (link) {
                window.open(link, '_blank');
            }
        });
    });

    /* =========================
       TILE CLICK → MODAL
    ========================== */
    eventTiles.forEach(tile => {
        tile.addEventListener('click', function(e) {

            if (e.target.closest('.book-btn')) return;

            const title = this.querySelector('h3').textContent;
            const location = this.querySelector('.event-location span').textContent;
            const description = this.querySelector('p').textContent;
            const img = this.querySelector('img').src;

            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-location').textContent = location;
            document.getElementById('modal-description').textContent = description;
            document.getElementById('modal-img').src = img;

            modal.style.display = 'flex';
        });
    });

    /* =========================
       CLOSE MODAL
    ========================== */
    closeModal.addEventListener('click', () => modal.style.display = 'none');

    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    /* =========================
       NAV BUTTONS
    ========================== */
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert(link.textContent + " page coming soon.");
        });
    });

    /* =========================
       SEARCH
    ========================== */
    document.querySelector('.search-container button')
    .addEventListener('click', () => {
        const q = document.querySelector('.search-container input').value;
        alert("Searching for: " + q);
    });

    /* =========================
       DARK MODE (FIXED)
    ========================== */
    if (toggleBtn) {

        // Load saved state
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }

        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }

});