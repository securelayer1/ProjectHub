document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const menuCards = document.getElementById('menu-cards');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuCards.style.display = menuCards.style.display === 'flex' ? 'none' : 'flex';
        menuCards.style.flexDirection = 'column';
    });

    document.addEventListener('click', (e) => {
        if (!menuCards.contains(e.target) && !toggle.contains(e.target)) {
            menuCards.style.display = 'none';
        }
    });

    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('click', () => {
            console.log("Ai apăsat pe cardul:", card.textContent);
            menuCards.style.display = 'none';
        });
    });
});