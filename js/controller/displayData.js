//Variables
let isActiveClass = "true";
const tabs = document.querySelectorAll(".filtres span");
const all = document.querySelectorAll(".photographerContainer");
let tagPerso;
// Methode Fetch
let getJson = () => {
  fetch('./../../data/data.json')    //permet de recuperer les ressources
    .then(response => response.json())
    .then(dataJson => { 
        displayData = dataJson;
        displayPhotographers(dataJson);  
        displayByDefault(dataJson); 
        scroll();
        getFilterTag();
    })
};
getJson();

// Affiche les photographes par defaut 
let displayByDefault = (dataJson) => {
  dataJson.photographers.forEach(photographe => {  
    const photographersDiv = document.getElementById('photographes_container');
    const div = document.createElement("div");   //methode pour creer un element html
    const photographerTemplate = `
    <div class="photographerContainer ${photographe.tags.map(tag => (`${tag}`)).join(" ")}">
      <a href="js/view/profile.html?id=${photographe.id}">
        <div class="v-portrait">
          <img src="img/Photographers ID Photos/${photographe.portrait}" alt="photo de ${photographe.name}">
        </div>
        <h1 class="name">${photographe.name}</h1>
      </a>
      <p class="city">${photographe.city}, ${photographe.country}</p>
      <p class="tagline">${photographe.tagline}</p>
      <p class="price">${photographe.price}€/jour</p>
      <div class="tags">${photographe.tags.map(tag => `<span id=${tag} class="tag individual-tags">#${tag}</span>`).join(" ")}</div>  
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
/*
let filterActiveTag = () => {
 
  const tabs = document.querySelectorAll(".filtres span");
  const portraits = document.querySelectorAll(".portrait");
  const arts = document.querySelectorAll(".art");
  const architectures = document.querySelectorAll(".architecture");
  const fashions = document.querySelectorAll(".fashion");
  const travels = document.querySelectorAll(".travel");
  const sports = document.querySelectorAll(".sport");
  const animalsX = document.querySelectorAll(".animals");
  const eventsX = document.querySelectorAll(".events");
  const all = document.querySelectorAll(".photographerContainer");

  tabs.forEach((tab) => {
    let tabval = tab.getAttribute("data-tabs");
    tab.addEventListener("click", () => {
        if (!tab.classList.contains('active')) {
          tab.classList.add('active');
          all.forEach(photographerContainer => {        
            photographerContainer.style.display = "none";
              if (tabval == "portrait") {
                portraits.forEach(portrait => {
                  portrait.style.display = "block";
                })
              }else if (tabval == "art") {
                arts.forEach(art => {
                  art.style.display = "block";
                })
              }else if (tabval == "architecture") {
                architectures.forEach(architecture => {
                  architecture.style.display = "block";
                })
              }else if (tabval == "fashion") {
                fashions.forEach(fashion => {
                  fashion.style.display = "block";
                })
              }else if (tabval == "travel") {
                travels.forEach(travel => {
                  travel.style.display = "block";
                })
              }else if (tabval == "sport") {
                sports.forEach(sport => {
                  sport.style.display = "block";
                })
              }else if (tabval == "animals") {
                animalsX.forEach(animals => {
                  animals.style.display = "block";
                })
              }else if (tabval == "events") {
                eventsX.forEach(events => {
                  events.style.display = "block";
                })
              }
            })
        } else {
         tab.classList.remove('active');
         all.forEach(photographerContainer => {
          photographerContainer.style.display = "block";
        })
      };
    })
  })
}
*/

const mybutton = document.getElementById("scroll_up");
window.onscroll = function() {scroll()};

let scroll = () =>  {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});





/* j'ai une liste de tag en haut
* chaque tag contiendra un attribut data-tabs
* lorsque je clique sur un tag il affichera les profils qui contiendront le meme tag
* lorsque je clique sur un nouveau tag, les profils qui auront ce nouveau tag s'ajouteront a ceux qui ont été affiché précédement
* lorsque je clique une 2eme fois sur le tag actif, celui-ci se désactivera.
* si aucun tag n'est sélectionné, ma page affichera tous les profils
*/ 

let getFilterTag = () => {
  tabs.forEach(val => {
    val.addEventListener("click", () => {
      tagPerso = val;
    })
  })
}  

/* Recuperer chaque data-tabs
*  Recuperer chaque tag par photographe ( doit etre selectionnable 1 par 1)
*/