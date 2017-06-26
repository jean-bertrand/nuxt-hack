<template>
  <div class="site-wrap">
    <div class="jumbotron hero">
      <site-header/>
      <div class="container">
        <site-form/>
      </div>
    </div>
    <site-footer/>
  </div>
</template>

<script>
  import SiteHeader from '~components/Header.vue'
  import SiteFooter from '~components/Footer.vue'
  import SiteForm from '~components/Form.vue'

  export default {
    components: {
      SiteHeader,
      SiteFooter,
      SiteForm,
    }
  }

</script>


