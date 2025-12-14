# No‑API Web Tools

A collection of **small, useful web tools** that run entirely in the browser.

No APIs. No accounts. No tracking. No backend.

Everything works offline once loaded.

---

## Why This Exists

Many everyday tools don’t need servers.

This repo demonstrates how far you can go using:

* HTML
* CSS
* Vanilla JavaScript
* Browser APIs only

These tools are:

* fast
* private
* cheap to host
* easy to understand

---

## Included Tools

| Tool           | Description                       |
| -------------- | --------------------------------- |
| Word Counter   | Live word & character counter     |
| Text Cleaner   | Remove extra spaces & line breaks |
| Case Converter | upper / lower / title case        |
| JSON Formatter | Pretty-print JSON                 |
| Image Resizer  | Resize images using Canvas        |

Each tool lives in its **own folder** and works by opening `index.html`.

---

## Folder Structure

```txt
no-api-web-tools/
├── word-counter/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── text-cleaner/
├── case-converter/
├── json-formatter/
├── image-resizer/
└── README.md
```

---

## Tool 1: Word Counter

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Word Counter</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <textarea id="text" placeholder="Start typing..."></textarea>
  <div id="stats">0 words · 0 characters</div>

  <script src="script.js"></script>
</body>
</html>
```

### `script.js`

```js
const text = document.getElementById("text");
const stats = document.getElementById("stats");

text.addEventListener("input", () => {
  const value = text.value;
  const words = value.trim() ? value.trim().split(/\s+/).length : 0;
  stats.textContent = `${words} words · ${value.length} characters`;
});
```

---

## Tool 2: Text Cleaner

```js
function clean(text) {
  return text
    .replace(/\s+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim();
}
```

---

## Tool 3: Case Converter

```js
function toTitleCase(str) {
  return str.replace(/\w\S*/g, w =>
    w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  );
}
```

---

## Tool 4: JSON Formatter

```js
function formatJSON(input) {
  return JSON.stringify(JSON.parse(input), null, 2);
}
```

---

## Tool 5: Image Resizer (Canvas)

```js
const input = document.getElementById("file");
const canvas = document.getElementById("canvas");

input.onchange = e => {
  const img = new Image();
  img.src = URL.createObjectURL(e.target.files[0]);

  img.onload = () => {
    const ctx = canvas.getContext("2d");
    canvas.width = img.width / 2;
    canvas.height = img.height / 2;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
};
```

---

## Design Principles

* One problem per tool
* Minimal UI
* No external services
* Browser-native APIs
* Copy-paste friendly

---

## When This Repo Is Useful

* You want a quick utility
* You don’t want to trust a random site
* You’re offline
* You want to learn browser fundamentals

---

## License

MIT

---

## Author

Built as a collection of local-first utilities.

More tools → **https://www.yuzool.com**
