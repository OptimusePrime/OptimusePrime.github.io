import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "/src/components/pages/Home"
import Location from "/src/components/pages/Location"
import TouristGuide from "/src/components/pages/TouristGuide"
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
    component: Location
  },
  {
    path: "/guide",
    name :"Tourist Guide | Kabul",
    component: TouristGuide
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
