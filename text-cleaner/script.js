document.getElementById("clean").onclick = () => {
  const input = document.getElementById("input").value;
  const cleaned = input
    .replace(/\s+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim();

  document.getElementById("output").value = cleaned;
};
