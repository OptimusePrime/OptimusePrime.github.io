<template>
  <div>
    <footer id="footer" class="bg-dark text-light text-center text-sm-center p-3">
      <div class="container">
        <div class="d-lg-flex align-items-center justify-content-center">
          <div>
            <p style="color: gray" class="lead my-4">{{text}}</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  props: {
    text: String
  }
}
</script>

<style scoped>
  #footer {
    position: relative;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
  }
</style>