Vue.use(VueRouter)
Vue.use(httpVueLoader)

const Homepage = httpVueLoader('./components/homepage.vue')
const Juriste = httpVueLoader('./components/juriste.vue')
const Musicien = httpVueLoader('./components/musicien.vue')


const router = new VueRouter({
  routes: [
    { path: '/', component: Homepage },
    { path: '/juriste/:step', component: Juriste },
    { path: '/musicien/:step', component: Musicien }

  ]
})

const app = new Vue({
  el: '#app',
  router,
  data: {
    message: 'Hello Vue!'
  }
})
