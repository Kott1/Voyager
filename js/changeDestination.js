document.addEventListener('DOMContentLoaded', function() {
    const data = JSON.parse(localStorage.getItem('data'));

    const headers = document.querySelectorAll('.destinationHeader');
    
    headers[0].textContent = data.name.toUpperCase();
    headers[1].textContent = data.code.toUpperCase();
});