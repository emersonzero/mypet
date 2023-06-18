//Hambúrguer

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "img/hamburguer.png"
  }else{
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "img/fechar.png"
  }
}


//Gallery

  //Makes a request to the Cat Photos API
  fetch('https://api.thecatapi.com/v1/images/search?limit=6')
  .then(response => response.json())
  .then(data => {
    const gallery = document.querySelector('.gallery');

    data.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.url;
      img.alt = 'Gato';

      gallery.appendChild(img);
    });
  })
  .catch(error => console.log(error));

// Makes a request to the Dog Photos API
fetch('https://api.thedogapi.com/v1/images/search?limit=6')
  .then(response => response.json())
  .then(data => {
    const gallery = document.querySelector('.gallery');

    data.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.url;
      img.alt = 'Cão';

      gallery.appendChild(img);
    });
  })
  .catch(error => console.log(error));

  
// fifth-section

const dogApiUrl = 'https://dog.ceo/api/breeds/list/all';
const catApiUrl = 'https://api.thecatapi.com/v1/images/search?limit=6';

fetch(dogApiUrl)
  .then(response => response.json())
  .then(data => {
    const breeds = Object.keys(data.message).slice(0, 5);

    breeds.forEach(breed => {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(data => {
          const imageURL = data.message;
          const name = getRandomName();
          const age = getRandomAge();
          const description = `Nome: ${name}, Raça: ${breed}, Idade: ${age}`;

          createCard(imageURL, description);
        });
    });
  });

fetch(catApiUrl)
  .then(response => response.json())
  .then(data => {
    const catImages = data.slice(0, 5);

    catImages.forEach(cat => {
      const imageURL = cat.url;
      const name = getRandomName();
      const age = getRandomAge();
      const description = `Nome: ${name}, Espécie: Gato, Idade: ${age}`;

      createCard(imageURL, description);
    });
  });

function createCard(imageURL, description) {
  const cardContainer = document.getElementById('animal-cards');

  const card = document.createElement('div');
  card.className = 'card-adopt';

  const image = document.createElement('img');
  image.src = imageURL;
  image.alt = description;

  //add the event addEventListener

  image.addEventListener('click', function(){
   // const bnt = createElement('button')
    openLightbox(image);
  })

  //close image

  lightboxImage.addEventListener('click', function(){
    closeLightbox();
  })

  const desc = document.createElement('p');
  desc.textContent = description;

  const adoptButton = document.createElement('button');
  adoptButton.className = 'adopt-button';
  adoptButton.textContent = 'Adotar';

  card.appendChild(image);
  card.appendChild(desc);
  card.appendChild(adoptButton);

  cardContainer.appendChild(card);
}

function getRandomName() {
  const names = ['Max', 'Bella', 'Charlie', 'Lucy', 'Cooper', 'Luna', 'Rocky', 'Daisy', 'Bailey', 'Sadie'];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function getRandomAge() {
  const minAge = 1;
  const maxAge = 5;
  return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
}

//LightBox

function openLightbox(image) {
  var lightbox = document.querySelector('.lightbox');
  var lightboxImage = document.getElementById('lightboxImage');
  
  lightboxImage.src = image.src;
  lightbox.style.display = 'block';
}

function closeLightbox() {
  var lightbox = document.querySelector('.lightbox');
  lightbox.style.display = 'none';
}

var videoPlayer = document.querySelector('.videoPlayer');
    
videoPlayer.addEventListener('ended', function() {
  videoPlayer.currentTime = 0;
  videoPlayer.pause();
});

// initial map setup
var latitude = -23.5505; // Latitude from the center of the map
var longitude = -46.6333; // Longitude from the center of the map
var zoom = 1.4; // starting map level

// Create map

var map = L.map('map').setView([latitude, longitude], zoom);


// add background map (tile layer)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Array of animal adoption locations
var adoptionLocations = [
  {
    name: 'Faithful Friend Adoption',
    latLng: [51.5074, -0.1278] 
  },
  {
    name: 'Happy Paws',
    latLng: [40.7128, -74.0060] 
  },
  {
    name: 'Home for Furries',
    latLng: [-33.8651, 151.2099] 
  },
  {
    name: 'Animal Love Adoptions',
    latLng: [48.8566, 2.3522] 
  },
  {
    name: 'Adoption with Care',
    latLng: [35.6895, 139.6917] 
  },
  {
    name: 'Four-Pawed Angels',
    latLng: [-22.9068, -43.1729] 
  },
  {
    name: 'Homes for Little Ones',
    latLng: [55.7558, 37.6176] 
  },
  {
    name: 'Shelter of Love',
    latLng: [37.7749, -122.4194] 
  },
  {
    name: 'Furry Hearts Shelter',
    latLng: [-34.6037, -58.3816] 
  },
  {
    name: 'Adopt a Friend',
    latLng: [39.9042, 116.4074] 
  },
];

// Add markers on the map for each adoption location
adoptionLocations.forEach(function(location) {
  L.marker(location.latLng).addTo(map)
    .bindPopup(location.name)
    .openPopup();
});

// Disable map activation with mouse scroll
map.scrollWheelZoom.disable();

//services

//const imagensServices =  document.querySelector('.imagens-services')