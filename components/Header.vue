<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <site-nav/>
  </div>
</template>

<script>
  import SiteNav from '~components/Nav.vue'

  export default {
    components: {
      SiteNav,
    }
  }
</script>

