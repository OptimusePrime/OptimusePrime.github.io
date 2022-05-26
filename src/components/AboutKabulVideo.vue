<template>
  <section class="bg-light text-light p-5 text-center text-sm-start align-items-start">
    <div class="container">
      <div class="align-items-start justify-content-start">
        <div>
          <h1 class="header-title">{{title.toUpperCase()}}</h1>
          <p class="lead my-4">{{text}}</p>
        </div>
        <div class="iframe-container">
          <iframe class="responsive-iframe" :src="url"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutKabulVideo",
  props: {
    text: String,
    url: String,
    title: String
  }
}
</script>

<style scoped>
  p, h1 {
    color: black;
  }

  h1 {
    font-size: 50px;
    font-weight: bold;
  }

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
    margin-top: 0;
  }
</style>