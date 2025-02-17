// Get all the animate-box elements
const animateBoxes = document.querySelectorAll('.animate-box');

// Create an intersection observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  },
  {
    rootMargin: '0px',
    threshold: 0.5,
  }
);

// Observe each animate-box element
animateBoxes.forEach((box) => {
  observer.observe(box);
});