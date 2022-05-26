<template>
  <section class="bg-light text-light text-center text-sm-start">
    <div class="container">
      <div class="align-items-start justify-content-around">
        <div>
          <h1 class="header-title">{{title.toUpperCase()}}</h1>
          <!--p class="lead my-4">{{text}}</p>-->
        </div>
        <div class="iframe-container">
          <iframe class="responsive-iframe" src="https://maps.google.com/maps?q=Kabul&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Location",
  data() {
    return {
      title: "Location",
      text: "Something"
    }
  }
}
</script>

<style scoped>
  .iframe-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  }

  /* Then style the iframe to fit in the container div with full height and width */
  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .header-title, p {
    color: black
  }
</style>