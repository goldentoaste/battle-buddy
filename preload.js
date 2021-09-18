// preload.js

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }

  let numofbackgrounds = 12;
  let backgroundurl =
    "url('res/backgrounds/Background" +
    (Math.floor(Math.random() * numofbackgrounds) + 1) +
    ".png')";
  console.log(backgroundurl);
  document.body.style.backgroundImage = backgroundurl;
});
