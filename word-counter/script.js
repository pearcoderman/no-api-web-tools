const text = document.getElementById("text");
const stats = document.getElementById("stats");

text.addEventListener("input", () => {
  const value = text.value;
  const words = value.trim() ? value.trim().split(/\s+/).length : 0;
  stats.textContent = `${words} words · ${value.length} characters`;
});
