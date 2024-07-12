const imgContainer = document.getElementById("image-container");
const loadingSpinner = document.getElementById("loading-spinner"); // Add this line
const count = 3;
const apikey = "WKMsyxX6BzHyixsNE8PEky9yrp7zKCHCKk7Mi467h5c";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;

const imagearr = [];

let scrolled = false;

function getImage() {
  loadingSpinner.style.display = "block"; // Show loading spinner
  fetch(apiUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      data.forEach(ImgObjs => {
        let img = ImgObjs.urls.regular;
        console.log(ImgObjs.urls.regular);
        imagearr.push(img);
      });
      SetImages(imagearr);
      loadingSpinner.style.display = "none"; // Hide loading spinner after images are loaded
    })
    .catch(error => {
      console.error("Error fetching images:", error);
      loadingSpinner.style.display = "none"; // Hide loading spinner in case of error
    });
}

const SetImages = function (data) {
  const div = document.createElement("div");
  data.forEach(image => {
    const img = document.createElement("img");
    img.setAttribute("src", image);
    div.appendChild(img);
  });
  imgContainer.appendChild(div);
  scrolled = false;
};

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    if (scrolled) return;
    getImage();
    scrolled = true;
  }
});
