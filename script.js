function toggleDarkMode() {
  const element = document.documentElement;
  element.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (element.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Foto do mayk brito light mode");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Foto do mayk brito");
  }
}
