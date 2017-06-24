<template>
  <div>
    <div :style="{ 'background-image': 'url(' + $store.state.bgImage + ')' }">
      <site-header/>
      <site-footer/>
    </div>
    <div class="hero">
      <h1>asdlfjkas;fljkaf;lj</h1>
    </div>
  </div>
</template>

<script>
  import SiteHeader from '~components/Header.vue'
  import SiteFooter from '~components/Footer.vue'

  export default {
    components: {
      SiteHeader,
      SiteFooter,
    }
  }

</script>


