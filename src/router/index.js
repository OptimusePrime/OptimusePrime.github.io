import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "/src/components/pages/Home"
import Location from "/src/components/pages/Location"
import History from "/src/components/pages/History"
import PhotoGallery from "@/components/pages/PhotoGallery";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home | Kabul',
    component: Home
  },
  {
    path: '/map',
    name: 'Location | Kabul',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Location
  },
  {
    path: "/history",
    name :"History | Kabul",
    component: History
  },
  {
    path: "/photos",
    name: "Photo Gallery | Kabul",
    component: PhotoGallery
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router
