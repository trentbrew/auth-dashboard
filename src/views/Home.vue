<template>
  <div class="page-container">
    <div class="content">
      <HelloWorld msg="Welcome!"></HelloWorld>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style  lang="scss">
.page-container {
    background: #eee;
}


</style>