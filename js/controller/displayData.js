//Variables
let isActiveClass;

// Methode Fetch
let getJson = () => {
  fetch('./../../data/data.json')    //permet de recuperer les ressources
    .then(response => response.json())
    .then(dataJson => { 
        displayData = dataJson;
        displayPhotographers(dataJson);  
        displayByDefault(dataJson)                       
    })
};
getJson();

// Affiche les photographes par defaut 
let displayByDefault = (dataJson) => {
  dataJson.photographers.forEach(photographe => {  
    const photographersDiv = document.getElementById('photographes_container');
    const div = document.createElement("div");   //methode pour creer un element html
    const photographerTemplate = `
    <div class="photographerContainer">
      <a href="photographers.html?id=${photographe.id}">
        <div class="portrait">
          <img src="img/Photographers ID Photos/${photographe.portrait}" alt="photo de ${photographe.name}">
        </div>
        <h1 class="name">${photographe.name}</h1>
      </a>
      <p class="city">${photographe.city}, ${photographe.country}</p>
      <p class="tagline">${photographe.tagline}</p>
      <p class="price">${photographe.price}€/jour</p>
      <p class="tags">${photographe.tags.map(tag => `<button id=${tag} class="tag individual-tags">#${tag}</button>`).join(" ")}</p>  
    </div>
    `  
    photographersDiv.appendChild(div);
    div.innerHTML = photographerTemplate;   //recupere et envoi dans la vue la syntaxe html
  }); 
};

// Injecte le DOM dans la vue
let displayPhotographers = () => {
  const photographersDiv = document.getElementById('photographes_container');
  photographersDiv.innerHTML = "";                        
}; 

// Ajoute la classe active sur les tags de filtrage au click
let addActiveClass = () => {
  const filterBtn = document.querySelectorAll('.filtres span');
  filterBtn.forEach(filterTag => filterTag.addEventListener('click', () => {
    if (!filterTag.classList.contains('active')) {
       filterTag.classList.add('active');
    } else {
      filterTag.classList.remove('active');
    };
  }));
};
addActiveClass();

//filtre
