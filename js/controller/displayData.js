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





/****************************************
 * liste de tag qui filtre les containers des profil de photographe.
 * filtre-tag: lors du click le bouton change d'apparence ( rajouter une class "active")
 *             lors du 2eme click sur le même bouton, il reviendra à son apparence initiale (supprimer la class active)
 *            lorsque le bouton sera actif, il affichera les photographes ayant le meme tag que le bouton (rajouter un identifiant de comparaisons)
 *            si 2 bouton ou + sont actifs les profiles afficher seront uniquement ceux qui contiennent 1 des tags filtres actifs dans l'identifiant de comparaison.
 *            si tous les boutons sont désactiver, tous les profiles doivent être afficher
 * ***************************************
 *  créer un tableau qui stockera la liste des tags actifs
 *  ???? Créer une class dans le container profil avec display:none en propriété qui enlevera les profils 
 *                        qui ne contiendra pas l'identifiant commun avec le tag actif ?????
 ****************************************/

let getFilterTag = () => {
  tabs.forEach(val => {
    val.addEventListener("click", () => {
      tagPerso = val;
    })
  })
}  

