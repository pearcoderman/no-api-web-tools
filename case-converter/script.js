const text = document.getElementById("text");

document.querySelectorAll("button").forEach(btn => {
  btn.onclick = () => {
    const value = text.value;
    if (btn.dataset.case === "upper") text.value = value.toUpperCase();
    if (btn.dataset.case === "lower") text.value = value.toLowerCase();
    if (btn.dataset.case === "title") {
      text.value = value.replace(/\w\S*/g, w =>
        w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
      );
    }
  };
});
