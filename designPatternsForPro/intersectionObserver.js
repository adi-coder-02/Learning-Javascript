// Select all lazy images
const lazyImages = document.querySelectorAll("img");

// Create Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("loaded");
            observer.unobserve(img);
        }
    });
}, 
{
    root: null,
    threshold: 0.2,       // 20% visible
});

// Observe each image
lazyImages.forEach(img => observer.observe(img));
