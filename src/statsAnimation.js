export function countUp(element, endValue, speed = 10) {
  let startValue = 0;
  const duration = 800;
  const incrementValue = endValue / (duration / speed);

  const updateCounter = () => {
    startValue += incrementValue;
    if (startValue >= endValue) {
      element.textContent = endValue;
    } else {
      element.textContent = Math.floor(startValue);
      setTimeout(updateCounter, speed);
    }
  };

  updateCounter();
}

export function initStatsAnimation() {
  const statsSection = document.querySelector(".stats-section");
  const statsValues = document.querySelectorAll(".stat-value");

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        statsValues.forEach((stat) => {
          const endValue = parseInt(stat.getAttribute("data-value"));
          countUp(stat, endValue, 10);
        });
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  // Observe the stats section
  if (statsSection) {
    observer.observe(statsSection);
  }
}
