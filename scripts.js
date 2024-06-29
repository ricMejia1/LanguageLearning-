document.getElementById('bigButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    bounceMessage(message);
});

function bounceMessage(element) {
    const duration = 2000; // Bounce duration in milliseconds
    const start = Date.now();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    function animate() {
        const elapsed = Date.now() - start;
        const progress = elapsed / duration;
        const angle = progress * 2 * Math.PI;

        if (progress < 1) {
            const x = screenWidth / 2 * (1 + Math.sin(angle));
            const y = screenHeight / 2 * (1 + Math.cos(angle));
            element.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(animate);
        } else {
            element.style.transform = 'translate(0, 0)'; // Reset to original position
            element.style.display = 'none'; // Hide the message after bouncing
        }
    }

    animate();
}
