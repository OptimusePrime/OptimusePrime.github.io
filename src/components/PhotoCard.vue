<template>
  <div class="card">
    <img :src="require(`@/assets/${img}`)" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoCard",
  props: {
    img: String,
    title: String,
    desc: String
  }
}
</script>

<style scoped>
  p, h5 {
    color: black
  }
</style>