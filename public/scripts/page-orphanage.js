const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const map = L.map("mapid", options).setView([-2.5417105, -44.2629066], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

L.marker([-2.5416061, -44.265218], { icon }).addTo(map);

// IMAGE GALLERY

function selectImage(event) {
  const button = event.currentTarget;

  //Remove classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // Selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  //atualizar o container de image
  imageContainer.src = image.src;

  //adcionar classe .active para o btn clicado
  button.classList.add("active");
}
