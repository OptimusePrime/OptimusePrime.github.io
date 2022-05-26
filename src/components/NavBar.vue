<template>
  <div>
    <b-navbar toggleable="lg" variant="light" type="light">
      <b-navbar-brand><b-img href="#" class="navbar-brand" :src="require(`/src/assets/${brand}`)" alt="OptimusePrime"></b-img></b-navbar-brand>
      <b-navbar-toggle style="margin-right: 15px" target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
        <b-nav-item active-class="active" class="nav-link align-items-end" v-for="NavItem in routes" :key="NavItem.id" :to="NavItem.path">{{NavItem.name.toUpperCase()}}</b-nav-item>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import utils from "@/utils";

export default {
  name: "NavBar",
  props: {
    routes: Array.of(utils.NavItem),
    brand: String
  },
}
</script>

<style scoped>
  .nav-link {
    font-weight: bold;
    font-family: Comfortaa, sans-serif;
    color: black;
    position: center;
  }

  .navbar-brand {
    max-width: 50px;
    margin-left: 10px;
  }

  #nav-collapse {
    margin-right: 15px;
  }
</style>