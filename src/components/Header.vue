<template>
  <section class="bg-dark text-light p-5 text-center text-sm-start">
    <div class="container">
      <div class="d-lg-flex align-items-center justify-content-between">
        <div>
          <h1 class="header-title">{{title.toUpperCase()}}</h1>
          <p class="lead my-4">{{introduction}}</p>
        </div>
        <img class="img-fluid d-sm-block d-none rounded d-block mx-4" style="width: 45%" :src="require(`/src/assets/${image}`)" :alt="title">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  props: {
    image: String,
    title: String,
    introduction: String
  }
}
</script>

<style scoped>
  .header-title {
    color: white;
    font-size: 60px;
    font-weight: bold;
  }

</style>