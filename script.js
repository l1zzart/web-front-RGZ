function showDate() {
    const now = new Date();

    const date = now.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace(/\//g, '.');

    const time = now.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    document.getElementById('current-date').textContent = date;
    document.getElementById('current-time').textContent = time;
}

showDate(); 
setInterval(showDate, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPage = window.location.pathname.split('/').pop() || 'about.html';

    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        
        if (itemHref === currentPage) {
            const icon = item.querySelector('.nav-icon');
            const activeSrc = icon.getAttribute('data-active-src');
            
            icon.src = activeSrc;
            item.classList.add('active');
        }
        
        item.addEventListener('click', function() {
            navItems.forEach(navItem => {
                const navIcon = navItem.querySelector('.nav-icon');
                const originalSrc = navIcon.getAttribute('src');
                navIcon.src = originalSrc.includes('-active.') ? 
                    originalSrc.replace('-active', '') : originalSrc;
                navItem.classList.remove('active');
            });
            
            const icon = this.querySelector('.nav-icon');
            icon.src = icon.getAttribute('data-active-src');
            this.classList.add('active');
        });
    });
}); 