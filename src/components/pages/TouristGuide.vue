<template>
  <section class="bg-light text-light text-center text-sm-start p-4">
    <div class="container">
      <div>
        <div>
          <h1 class="header-title">TOURIST GUIDE</h1>
          <p>Many countries have imposed travel restrictions regarding the travel to Afghanistan due to the now not so recent Taliban takeover of the Afghan government, however, we are still going to present some potential tourist destinations in Kabul when the restrictions eventually get lifted.</p>
        </div>
        <div>
          <div class="py-3">
            <h2>BABUR TOMB</h2>
            <img  lass="img-fluid" :src="require(`/src/assets/babur_tomb.jpg`)" alt="BABUR TOMB">
          </div>
          <div class="py-3">
            <h2>QARGHA LAKE</h2>
            <img  lass="img-fluid" :src="require(`/src/assets/qargha_lake.jpg`)" alt="QARGHA LAKE">
          </div>
          <div class="py-3">
            <h2>CHRISTIAN CEMETERY</h2>
            <img  lass="img-fluid" :src="require(`/src/assets/chrisian_cem.jpg`)" alt="CHRISTIAN CEMETERY">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TouristGuide"
}
</script>

<style scoped>
  p, h1, h2 {
    color: black;
  }
</style>