//alert("Welcome to Akash Sharma's Profile")


// darkmode button 
const darkModeToggle = document.querySelector('#darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});