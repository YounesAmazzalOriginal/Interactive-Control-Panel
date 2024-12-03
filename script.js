document.addEventListener("DOMContentLoaded", () => {
  const width = document.querySelector("#width");
  const height = document.querySelector("#height");
  const widthValue = document.querySelector("#widthValue");
  const heightValue = document.querySelector("#heightValue");
  const bgColor = document.querySelector("#bgColor");
  const borderSize = document.querySelector("#borderSize");
  const borderColor = document.querySelector("#borderColor");
  const borderSizeValue = document.querySelector("#borderSizeValue");
  const borderRadius = document.querySelector("#borderRadius");
  const borderRadiusValue = document.querySelector("#borderRadiusValue");
  const boxShadow = document.querySelector("#boxShadow");
  const boxShadowValue = document.querySelector("#boxShadowValue");
  const preview = document.querySelector(".preview");
  //
  //
  width.addEventListener("input", () => {
    preview.style.width = `${width.value}px`;
    widthValue.textContent = `${width.value}px`;
    localStorage.setItem("width", width.value);
  });
  height.addEventListener("input", () => {
    preview.style.height = `${height.value}px`;
    heightValue.textContent = `${height.value}px`;
    localStorage.setItem("height", height.value);
  });
  bgColor.addEventListener("input", () => {
    localStorage.setItem("bgColor", bgColor.value);
    preview.style.backgroundColor = bgColor.value;
  });
  borderSize.addEventListener("input", () => {
    preview.style.border = `${borderSize.value}px solid ${borderColor.value}`;
    borderSizeValue.textContent = `${borderSize.value}px`;
    localStorage.setItem("borderSize", borderSize.value);
  });

  borderColor.addEventListener("input", () => {
    preview.style.border = `${borderSize.value}px solid ${borderColor.value}`;
    localStorage.setItem("borderColor", borderColor.value);
  });
  borderRadius.addEventListener("input", () => {
    preview.style.borderRadius = `${borderRadius.value}px`;
    borderRadiusValue.textContent = `${borderRadius.value}px`;
    localStorage.setItem("borderRadius", borderRadius.value);
  });
  boxShadow.addEventListener("input", () => {
    preview.style.boxShadow = `0 0 ${boxShadow.value}px black`;
    boxShadowValue.textContent = `${boxShadow.value}px`;
    localStorage.setItem("boxShadow", boxShadow.value);
  });

  const widthSaved = localStorage.getItem("width");
  const heightSaved = localStorage.getItem("height");
  const bgColorSaved = localStorage.getItem("bgColor");
  const borderSizeSaved = localStorage.getItem("borderSize");
  const borderColorSaved = localStorage.getItem("borderColor");
  const borderRadiusSaved = localStorage.getItem("borderRadius");
  const boxShadowSaved = localStorage.getItem("boxShadow");

  if (
    widthSaved &&
    heightSaved &&
    bgColorSaved &&
    borderSizeSaved &&
    borderColorSaved &&
    borderRadiusSaved &&
    boxShadowSaved
  ) {
    preview.style.width = `${widthSaved}px`;
    preview.style.height = `${heightSaved}px`;
    preview.style.backgroundColor = bgColorSaved;
    preview.style.border = `${borderSizeSaved}px solid ${borderColorSaved}`;
    preview.style.borderRadius = `${borderRadiusSaved}px`;
    preview.style.boxShadow = `0 0 ${boxShadowSaved}px black`;
    //
    widthValue.textContent = `${widthSaved}px`;
    width.value = widthSaved;
    heightValue.textContent = `${heightSaved}px`;
    height.value = heightSaved;
    boxShadowValue.textContent = `${boxShadowSaved}px`;
    boxShadow.value = boxShadowSaved;
    borderColor.value = `${borderColorSaved}`;
    borderSize.value = `${borderSizeSaved}`;
    borderSizeValue.textContent = `${borderSizeSaved}px`;
    bgColor.value = `${bgColorSaved}`;
    borderRadius.value = `${borderRadiusSaved}`;
    borderRadiusValue.textContent = `${borderRadiusSaved}px`;
  }
});
