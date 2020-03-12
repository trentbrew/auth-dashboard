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
            msg: "You are authorized to create, delete, and track users"
        }
    }
}
</script>

<style scoped lang="scss">
.page-container {
    //background: gray;
}
</style>