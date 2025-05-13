document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.classList.add('animate');
    });
    img.addEventListener('mouseout', () => {
        img.classList.remove('animate');
    });
});