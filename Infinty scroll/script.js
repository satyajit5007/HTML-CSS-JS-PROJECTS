const imgContainer = document.getElementById("image-container");
const count = 3;
const apikey = "WKMsyxX6BzHyixsNE8PEky9yrp7zKCHCKk7Mi467h5c";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;

const imagearr = [];

let scrolled = false;

// function getImage() {
//   const imagePromise = new Promise((res, rej) => {
//     res(fetch(apiUrl));
//     rej((err) => {
//       console.log(err);
//     });
//   });

//   imagePromise
//     .then((Response) => {
//       console.log("check promise");
//       return Response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       data.forEach((ImgObjs) => {
//         console.log(ImgObjs.urls.regular);
//         imagearr.push(ImgObjs.urls.regular);
//       });
//       SetImages(imagearr);
//     })
//     .catch();
// }
// getImage();

//just then and catch

function getImage(){
  fetch(apiUrl)
  .then(responce=>{
    return responce.json();
  }).then((data) => {
    console.log(data);
    data.forEach((ImgObjs) => {
      console.log(ImgObjs.urls.regular);
      let img = ImgObjs.urls.regular;
      imagearr.push(img);
    });
    SetImages(imagearr);
  })
  .catch();

}
getImage();


const SetImages = function (data) {
  const div = document.createElement("div");
  imagearr.forEach((image) => {
    const img = document.createElement("img");
    img.setAttribute("src", image);
    div.appendChild(img);
    // console.log(img);
  });
  imgContainer.appendChild(div);
  scrolled = false;
};

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // alert(window.innerHeight , window.scrollY , document.body.offsetHeight)
    if (scrolled) return;
    getImage();
    scrolled = true;
  }
});
