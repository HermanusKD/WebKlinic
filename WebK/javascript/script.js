const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Attach to a button click (for example)
document.querySelector('#dark-mode-toggle').addEventListener('click', toggleDarkMode);

document.querySelectorAll('.flip-btn').forEach(button => {
    button.addEventListener('click', function() {
        const serviceBox = this.closest('.service-box');
        serviceBox.classList.toggle('flipped');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById('read-more-btn');
    const retractBtn = document.getElementById('retract-btn');
    const skillsSection = document.getElementById('skills-section');

    readMoreBtn.addEventListener('click', function() {
        skillsSection.style.display = 'block'; // Show skills section
        readMoreBtn.style.display = 'none'; // Hide the "Read More" button
    });

    retractBtn.addEventListener('click', function() {
        skillsSection.style.display = 'none'; // Hide skills section
        readMoreBtn.style.display = 'inline'; // Show the "Read More" button again
    });

    // Calculate and display the average rating
    const ratings = [90, 85, 70, 95, 80, 75, 85]; // Skill ratings
    const average = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2);
});
// Ensure this script is at the bottom of the body tag
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-toggle').addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active'); // Toggle 'active' class
    });

    document.getElementById('close-btn').addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('active'); // Close the sidebar
    });
});

const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('enlarged');
    });
});
const readMoreBtn = document.getElementById('read-more-btn');
    const retractBtn = document.getElementById('retract-btn');
    const extraContent = document.getElementById('skills-section');

    // Initially hide the extra content
    extraContent.style.display = 'none';

    readMoreBtn.addEventListener('click', () => {
        extraContent.style.display = 'block'; // Show extra content
        readMoreBtn.style.display = 'none'; // Hide "Read More" button
    });

    retractBtn.addEventListener('click', () => {
        extraContent.style.display = 'none'; // Hide extra content
        readMoreBtn.style.display = 'inline'; // Show "Read More" button
    });
    const reviewsContainer = document.querySelector('.reviews-container');
    const reviewItems = document.querySelectorAll('.review-item');
    const nextButton = document.getElementById('next-btn');
    const prevButton = document.getElementById('prev-btn');

    let currentIndex = 0; // Current review index
    const totalReviews = reviewItems.length; // Total number of reviews

    // Function to show the current review
    function showReview(index) {
        const offset = -index * 100; // Calculate offset for sliding effect
        reviewsContainer.style.transform = `translateX(${offset}%)`; // Apply the transformation
    }

    // Next review function
    function nextReview() {
        currentIndex = (currentIndex + 1) % totalReviews; // Increment index and loop back
        showReview(currentIndex); // Show the next review
    }

    // Previous review function
    function prevReview() {
        currentIndex = (currentIndex - 1 + totalReviews) % totalReviews; // Decrement index and loop back
        showReview(currentIndex); // Show the previous review
    }

    // Set an interval to automatically swipe every 5 seconds
    let interval = setInterval(nextReview, 5000);

    // Event listeners for navigation buttons
    nextButton.addEventListener('click', () => {
        nextReview(); // Call next review function
        clearInterval(interval); // Clear the interval to prevent conflicts
        interval = setInterval(nextReview, 5000); // Restart the interval
    });

    prevButton.addEventListener('click', () => {
        prevReview(); // Call previous review function
        clearInterval(interval); // Clear the interval to prevent conflicts
        interval = setInterval(nextReview, 5000); // Restart the interval
    });