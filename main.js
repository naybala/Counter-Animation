const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const speed = 500;
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const incrementRate = target / speed;

    if (count < target) {
      counter.innerText = Math.round(count + incrementRate);
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

