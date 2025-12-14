const file = document.getElementById("file");
const canvas = document.getElementById("canvas");

file.onchange = e => {
  const img = new Image();
  img.src = URL.createObjectURL(e.target.files[0]);

  img.onload = () => {
    const ctx = canvas.getContext("2d");
    canvas.width = img.width / 2;
    canvas.height = img.height / 2;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
};
