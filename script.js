document.getElementById('modal-btn').addEventListener('change', function(event) {
    if (event.target.checked) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
});
