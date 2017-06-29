<template>
  <div class="site-wrap">
    <site-hero/>
    <single-quote/>
    <icon-row/>
    <longform-text/>
    <inline-button/>
    <site-FAQ/>
    <inline-button/>
    <site-footer/>
  </div>
</template>

<script>
  import SiteHero from '~components/Hero.vue'
  import SiteFooter from '~components/Footer.vue'
  import SingleQuote from '~components/SingleQuote.vue'
  import IconRow from '~components/IconRow.vue'
  import LongformText from '~components/LongformText.vue'
  import InlineButton from '~components/InlineButton.vue'
  import SiteFAQ from '~components/Faq.vue'

  export default {
    components: {
      SiteHero,
      SingleQuote,
      IconRow,
      LongformText,
      InlineButton,
      SiteFooter,
      SiteFAQ,
    }
  }

</script>


