Vue.use(VueRouter)
Vue.use(httpVueLoader)
Vue.use(SocialSharing)

const Homepage = httpVueLoader('./components/homepage.vue')
const Juriste = httpVueLoader('./components/juriste.vue')
const Musicien = httpVueLoader('./components/musicien.vue')
const Conducteur = httpVueLoader('./components/conducteur.vue')
const Credits = httpVueLoader('./components/credits.vue')


const router = new VueRouter({
  routes: [
    { path: '/', component: Homepage },
    { path: '/juriste/:step', component: Juriste },
    { path: '/musicien/:step', component: Musicien },
    { path: '/conducteur/:step', component: Conducteur },
    { path: '/credits/:parcours', component: Credits, props: true },
  ]
})

const app = new Vue({
  el: '#app',
  router,
  data: {
    message: 'Hello Vue!'
  }
})
