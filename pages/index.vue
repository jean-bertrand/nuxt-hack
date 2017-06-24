<template>
  <div>
    <site-header/>
    <site-footer/>
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


