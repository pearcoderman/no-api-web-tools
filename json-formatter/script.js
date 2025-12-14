document.getElementById("format").onclick = () => {
  try {
    const input = document.getElementById("input").value;
    const formatted = JSON.stringify(JSON.parse(input), null, 2);
    document.getElementById("output").value = formatted;
  } catch {
    alert("Invalid JSON");
  }
};
