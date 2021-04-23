//Variables
let isActiveClass;
// Methode Fetch
let getJson = () => {
  fetch('./../../data/data.json')    //permet de recuperer les ressources
    .then(response => response.json())
    .then(dataJson => { 
        displayData = dataJson;
        displayPhotographers(dataJson);  
        displayByDefault(dataJson);
        filterActiveTag();          
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
      <div class="tags">${photographe.tags.map(tag => `<button id=${tag} class="tag individual-tags">#${tag}</button>`).join(" ")}</div>  
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
/*let addActiveClass = () => {
  const filterBtn = document.querySelectorAll('.filtres span');
  filterBtn.forEach(filterTag => filterTag.addEventListener('click', () => {
    if (!filterTag.classList.contains('active')) {
       filterTag.classList.add('active');
    } else {
      filterTag.classList.remove('active');
    };
  }));
};
addActiveClass();*/

/*
// Filtre par tags 
function filterPhotographersIndividualTages(dataJson) {  
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('individual-tags')) {
      const photographersDiv = document.getElementById('photographes_container');
      photographersDiv.innerHTML = "";                                      
      filterElements(dataJson, event.target);
    }
  });
};
*/

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
    const tabval = tab.getAttribute("data-tabs"); 
    let isActiveButton = false;
    tab.addEventListener("click", () => {
        if (!tab.classList.contains('active')) {
          tab.classList.add('active');
          isActiveButton = true;
          console.log(isActiveButton);     
       } else {
         tab.classList.remove('active');
         isActiveButton = false;
         console.log(isActiveButton);
       };

      if (isActiveButton == true) {
        all.forEach(photographerContainer => {
          photographerContainer.style.display = "none";
        })
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
      }else if (isActiveButton == false){
        all.forEach(photographerContainer => {
            photographerContainer.style.display = "block";
        })
      } console.log(tabval);     
    }) 
  })
} 


