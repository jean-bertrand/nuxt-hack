<template>
  <div class="jumbotron hero">
    <site-header/>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h1 class="jumbotron-title">Online Bartender Certification &amp; Training</h1>
          <p>Get started in the world of bartending or get back to taking shifts and serving up for your regulars. Get your bartender certification for the first time or re-up your bartender license online now.</p>
        </div>
        <div class="col-sm-5 offset-sm-1">
          <site-form/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SiteHeader from '~components/Header.vue'
  import SiteForm from '~components/Form.vue'

  export default {
    components: {
      SiteHeader,
      SiteForm,
    }
  }
</script>