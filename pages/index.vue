<template>
  <div class="site-wrap">
    <site-hero/>
    <single-quote/>
    <icon-row/>
    <longform-text/>
    <state-form/>
    <site-footer/>
  </div>
</template>

<script>
  import SiteHero from '~components/Hero.vue'
  import SiteFooter from '~components/Footer.vue'
  import SingleQuote from '~components/SingleQuote.vue'
  import IconRow from '~components/IconRow.vue'
  import LongformText from '~components/LongformText.vue'
  import StateForm from '~components/StateForm.vue'

  export default {
    components: {
      SiteHero,
      SingleQuote,
      IconRow,
      LongformText,
      StateForm,
      SiteFooter,
    }
  }

</script>


