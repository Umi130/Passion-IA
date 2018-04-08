Vue.use(VueRouter)
Vue.use(httpVueLoader)

const Homepage = httpVueLoader('./components/homepage.vue')
const Juriste = httpVueLoader('./components/juriste.vue')
const Musicien = httpVueLoader('./components/musicien.vue')
const Conducteur = httpVueLoader('./components/conducteur.vue')


const router = new VueRouter({
  routes: [
    { path: '/', component: Homepage },
    { path: '/juriste/:step', component: Juriste },
    { path: '/musicien/:step', component: Musicien },
    { path: '/conducteur/:step', component: Conducteur },

  ]
})

const app = new Vue({
  el: '#app',
  router,
  data: {
    message: 'Hello Vue!'
  }
})


addModale = function() {

// Adding JS for modale
// Get the modal

var modal = document.getElementById('modalInfo');

// Get the button that opens the modal
var btn = document.getElementById("info");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

if(!btn){
  setTimeout(addModale, 200);
  return;
}

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
};

addModale();