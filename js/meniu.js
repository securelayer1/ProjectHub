document.addEventListener('DOMContentLoaded', () => {
    // Ia elementele din HTML
    const menuToggle = document.getElementById('menu-toggle');
    const menuCards = document.getElementById('menu-cards');

    // Când dai click pe buton, afișează/ascunde cardurile
    menuToggle.addEventListener('click', () => {
        if (menuCards.style.display === 'flex') {
            menuCards.style.display = 'none';
        } else {
            menuCards.style.display = 'flex';
        }
    });
});