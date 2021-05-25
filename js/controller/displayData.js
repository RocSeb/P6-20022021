//Variables
let isActiveClass = "true";
const tabs = document.querySelectorAll(".filtres span");
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
        showAll();
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

let showAll = () => {
  const all = document.querySelectorAll(".photographerContainer");
  all.forEach((profile) => {
    profile.classList.add('show')
  })
};

let filterActiveTag = () => {
 
  const tags = document.querySelectorAll(".filtres span");
  const all = document.querySelectorAll(".photographerContainer");

  tags.forEach((tag) => {
    var tagval = tag.getAttribute("data-tabs");
    tag.addEventListener("click", () => {
      if (!tag.classList.contains('active')) {
        tag.classList.add('active');
        all.forEach((profile) => { 
          if (profile.classList.contains(tagval)) {
            profile.classList.add('show')
          } else {
            profile.classList.remove('show')
          }
        })
      } else {
          tag.classList.remove('active')
          showAll();
      }
    })
  })
}

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