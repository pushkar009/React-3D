document.addEventListener("DOMContentLoaded", () => {
  // Wait a bit for React to render
  setTimeout(() => {
    const textBlock = document.getElementById('text-block');
    if (!textBlock) {
      console.error('textBlock not found!');
      return;
    }

    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(([entry]) => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      lastScrollY = currentScrollY;

      if (entry.isIntersecting && scrollingDown) {
        textBlock.classList.add('visible');
      } else if (!entry.isIntersecting && scrollingUp) {
        textBlock.classList.remove('visible');
      }
    }, {
      threshold: 0.5
    });

    observer.observe(textBlock);
  }, 500); // delay for React
});
