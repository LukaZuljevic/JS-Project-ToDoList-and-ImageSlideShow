//funckije arrow botuna
const leftArrowButton = document.querySelector("#left-button");
const rightArrowButton = document.querySelector("#right-button");
let pictures = document.querySelectorAll(".images img");
let box = document.querySelector(".box");

let positionImage = 0;

leftArrowButton.addEventListener("click", () => {
  positionImage--;

  if (positionImage === -1) {
    positionImage = pictures.length - 1;
  }

  displayImagesNone();

  pictures[positionImage].style.display = "block";
  box.style.display = "none";
});

rightArrowButton.addEventListener("click", () => {
  positionImage++;

  if (positionImage === pictures.length) {
    positionImage = 0;
  }

  displayImagesNone();

  pictures[positionImage].style.display = "block";
  box.style.display = "none";
});

const displayImagesNone = () => {
  pictures.forEach((img) => {
    img.style.display = "none";
  });
};

//citanje i ubacivanje file-ova u slide show
let urlInput = document.querySelector(".input-url");

urlInput.onchange = () => {
  box.style.display = "none";

  let urlPath = urlInput.value;
  let newPicture = document.querySelector(".images");

  if (pictures.length === 0) {
    newPicture.innerHTML += `<img src = "${urlPath}" style="display:block;">`;
    pictures = document.querySelectorAll(".images img");
  } else {
    newPicture.innerHTML += `<img src = "${urlPath}" style="display:none;">`;
    pictures = document.querySelectorAll(".images img");
  }
  let listElement = document.querySelector(".listOfImages ul");
  listElement.innerHTML += `<li>Dodana slika - URL:${urlPath.substring(
    0,
    16
  )}... </li>`;

  urlInput.value = "";
};
