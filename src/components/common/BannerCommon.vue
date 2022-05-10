<template>
  <div
    class="events-banner"
    :style="{
      backgroundImage: `url(${require('@/assets/images/' + bannerImage)})`,
    }"
  >
    <v-container class="d-flex justify-center align-center">
      <h1>{{ bannerText }}</h1>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    bannerImage: String,
    bannerText: String,
  },
};
</script>

<style lang="scss" scoped>
.events-banner {
  min-height: 30vh;
  display: grid;
  place-items: center;
  background-size: cover;
  background-position: center 25%;
}
</style>
