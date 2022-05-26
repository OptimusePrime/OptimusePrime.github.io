<template>
  <section class="bg-light text-light text-center text-sm-start">
    <div class="container">
      <div>
        <div>
          <h1 class="header-title">PHOTO GALLERY</h1>
        </div>
        <div class="row">
          <div v-for="(title, index) in titles" :key="index" class="col-lg-4 col-sm-10 col-md-6 p-3">
            <PhotoCard :title="title" desc="" :img="images[index]"></PhotoCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PhotoCard from "@/components/PhotoCard";

export default {
  name: "PhotoGallery",
  components: {
    PhotoCard
  },
  data() {
    return {
      titles: [
        "The Ruins of Kabul", "The Mountain Web", "The Patriot Trees", "The Bird Camp", "The Wakhan Corridor", "The Ancient Silk Road", "The Sapphire Rivers", "The Buffalo Hills", "The Roof Of The World",
        "The Ancient Afghan Petroglyphs", "The Tombs Of Afghanistan", "The Children Of The Wakhan"
      ],
      images: [
          "image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg", "image_5.webp", "image_6.webp", "image_7.webp", "image_8.webp", "image_9.webp", "image_10.webp", "image_11.webp", "image_12.webp"
      ]
    }
  }
}
</script>

<style scoped>
  h1 {
    color: black;
  }
</style>