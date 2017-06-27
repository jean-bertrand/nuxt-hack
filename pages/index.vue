<template>
  <div class="site-wrap">
    <site-hero/>
    <single-quote/>
    <icon-row/>
    <site-footer/>
  </div>
</template>

<script>
  import SiteHero from '~components/Hero.vue'
  import SiteFooter from '~components/Footer.vue'
  import SingleQuote from '~components/SingleQuote.vue'
  import IconRow from '~components/IconRow.vue'

  export default {
    components: {
      SiteHero,
      SiteFooter,
      SingleQuote,
      IconRow,
    }
  }

</script>


