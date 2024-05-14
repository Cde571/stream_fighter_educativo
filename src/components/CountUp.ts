function animateValue(obj: HTMLElement | null, start: number, end: number, duration: number) {
  let startTimestamp: number | null = null;
  
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    if (obj) obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  
  if (obj) window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 100, 0, 5000);
