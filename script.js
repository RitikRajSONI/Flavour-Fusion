document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const duration = 2000; 
    
    const startTime = performance.now();

    function updateCounters(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); 
        

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const value = Math.floor(target * progress);
            counter.textContent = value;
        });

        if (progress < 1) {
            requestAnimationFrame(updateCounters);
        }
    }

    requestAnimationFrame(updateCounters);
});
