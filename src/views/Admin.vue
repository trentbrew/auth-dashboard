<template>
  <div class="page-container">
      <div class="content">
        <h1>Admin page</h1>
        <p>{{ msg }}</p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "welcome!"
        }
    }
}
</script>

<style scoped lang="scss">
.page-container {
    //background: gray;
}
</style>