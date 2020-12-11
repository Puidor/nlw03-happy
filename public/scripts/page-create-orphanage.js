const map = L.map("mapid").setView([-2.5417105, -44.2629066], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//Criar e Adicionar map marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar o campo de fotos

function addPhotoField() {
  // Pegar o container de fotos #images
  const container = document.querySelector("#images");
  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //Verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  //Limpar campo antes de adicionar ao container de imagens
  input.value = "";
  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //Limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//Select Yes or No
function toggleSelect(event) {
  // Retirar a classe active dos botoes
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  // Colocar a classe active no clicado
  const button = event.currentTarget;
  button.classList.add("active");

  // Atualizar o meu input hidden com valor selecionado
  const input = document.querySelector('[name="opening_on_weekends"]');
  console.log(input);

  // Verificar se Sim ou Nao
  input.value = button.dataset.value;
}
