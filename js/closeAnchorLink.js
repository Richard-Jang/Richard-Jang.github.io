
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        const closeButton = document.getElementById('closeButton');
        closeButton.click();
    });
});
