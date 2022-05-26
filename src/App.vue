<template>
  <div id="app">
    <NavBar :routes="navItems" brand="logo.jpg"></NavBar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Comfortaa, Helvetica, sans-serif;
}

</style>
<script>
import NavBar from "@/components/NavBar";
import {NavItem} from "@/utils";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      navItems: [
        new NavItem(0, "Home", "/"),
        new NavItem(1, "Location", "/map"),
        new NavItem(2, "History", "/history"),
        new NavItem(3, "Photo Gallery", "/photos")
      ],
      footer: `Copyright © ${new Date().getFullYear()} Karlo Vizec. All rights reserved.`
    }
  }
}
</script>