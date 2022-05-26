<template>
  <div>
    <Header image="kabul_map.jpg" title="Kabul" :introduction="introduction"></Header>
    <AboutKabulVideo :url="url" :text="videoText" title="Find Out More About Kabul"></AboutKabulVideo>
  </div>
</template>

<script>
import Header from "@/components/Header";
import AboutKabulVideo from "@/components/AboutKabulVideo";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    Header,
    AboutKabulVideo,
  },
  data() {
    return {
      introduction: "Kabul is the capital city of Afghanistan. The settlement Kabul has existed for about 3,500 years.",
      url: "https://www.youtube.com/embed/WRo_-ZXrSIc",
      videoText: "Kabul is indeed a beautiful place, or at least it was before the Taliban takeover. Take a look at this video to find out more about life in Kabul since Taliban takeover of Afghanistan."
    }
  }
}
</script>

<style scoped>
</style>