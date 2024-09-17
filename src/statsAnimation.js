// Function to count up numbers
export function countUp(element, endValue, speed = 10) {
  let startValue = 0;
  const duration = 1000; // Duration in ms (speed up by reducing the duration)
  const incrementValue = endValue / (duration / speed); // Faster speed

  const updateCounter = () => {
    startValue += incrementValue;
    if (startValue >= endValue) {
      element.textContent = endValue; // Set the final value
    } else {
      element.textContent = Math.floor(startValue);
      setTimeout(updateCounter, speed); // Faster update speed
    }
  };

  updateCounter();
}

// Function to check when stats section is visible and trigger the count-up animation
export function initStatsAnimation() {
  const statsSection = document.querySelector(".stats-section");
  const statsValues = document.querySelectorAll(".stat-value");

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        // Start counting up for each stat
        statsValues.forEach((stat) => {
          const endValue = parseInt(stat.getAttribute("data-value"));
          countUp(stat, endValue, 10); // Faster animation
        });
        observer.disconnect(); // Only trigger the animation once
      }
    },
    { threshold: 0.3 } // Trigger when 30% of the section is visible
  );

  // Observe the stats section
  if (statsSection) {
    observer.observe(statsSection);
  }
}
