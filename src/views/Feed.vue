<template>
  <div class="page-container">
    <div class="content">
        <h1>Feed</h1>
        <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "dynamic content template"
        }
    }
}
</script>

<style scoped lang="scss">
.page-container {
    //background: purple;
}
</style>