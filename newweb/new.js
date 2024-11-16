let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slideContainer = document.querySelector('.slide');

next.addEventListener('click', function() {
    slideContainer.classList.add('slide-transition'); // Add transition class for smooth effect
    let items = document.querySelectorAll('.item');
    slideContainer.appendChild(items[0]); // Move first item to end
    
    setTimeout(() => {
        slideContainer.classList.remove('slide-transition'); // Remove transition for new position
    }, 500); // Adjust this to match transition timing in CSS
});

prev.addEventListener('click', function() {
    slideContainer.classList.add('slide-transition'); // Add transition class for smooth effect
    let items = document.querySelectorAll('.item');
    slideContainer.prepend(items[items.length - 1]); // Move last item to start
    
    setTimeout(() => {
        slideContainer.classList.remove('slide-transition'); // Remove transition for new position
    }, 500); // Adjust this to match transition timing in CSS
});
