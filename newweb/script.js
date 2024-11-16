function showTour(tourId) {
    // Hide all tours
    const tours = document.getElementsByClassName('landmark-tour');
    for (let i = 0; i < tours.length; i++) {
        tours[i].style.display = 'none';
    }
    // Show the selected tour
    document.getElementById(tourId).style.display = 'block';
    
    // Scroll to the virtual tour section
    const virtualTourSection = document.getElementById('virtual-tour');
    virtualTourSection.scrollIntoView({ behavior: 'smooth' });
}
