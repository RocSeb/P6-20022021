//Variables


// Methode Fetch
function getJson(){
  fetch('./../../data/data.json')    //permet de recuperer les ressources
    .then(response => response.json())
    .then(dataJson => { 
        displayData = dataJson;
        displayPhotographers(dataJson);  
        displayByDefault(dataJson)                       
        //filterTag(dataJson)       
        //redirectAndFilter(dataJson)
    })
};
getJson();

// Affiche les photographes par defaut 
function displayByDefault(dataJson) {
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
function displayPhotographers(dataJson){
  const buttons = document.querySelectorAll(".filtres span");
  buttons.forEach(btn => btn.addEventListener("click", () => {  
    const photographersDiv = document.getElementById('photographes_container');
    photographersDiv.innerHTML = "";                        
  }));
}; 




/****
 * processus du filtre:
 *    l'utilisateur clique sur le tag (fonction a executé qui filtre => event click)
 *    affiche les profiles avec le meme tag
 ****/

/****
 * activation bouton filtre
 *    isTagActive = false;
 *    function event click sur le bouton tag du filtre
 *      if isTagActive === true {
 *        isTagActive = false;
 *      } else {
 *        isTagActive = true; 
 *      }
 ****/ 
 








/*
// Filtre 
const tagName = window.location.search.split('id=')[1];  
function redirectAndFilter(dataJson) {
  if(tagName){
    const photographersDiv = document.getElementById('photographes_container');
    photographersDiv.innerHTML = "";  
    filterElements(dataJson, tagName)
  }
} 


// Fonction ACTIVE en clickant sur le bouton 

function addActiveClass() {
  const buttons = document.querySelectorAll(".filtres span");
  buttons.forEach(btn => btn.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active'); 
  }));
}
addActiveClass(); 

// Ajoute un événement à chaque clicke //


 // Filtre par tags 

function filterTag(dataJson) {  
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('individual-tags')) {
      const photographersDiv = document.getElementById('photographes_container');
      photographersDiv.innerHTML = "";                                      
      filterElements(dataJson, event.target);     // appel de la fonction
    }
  });
}; */