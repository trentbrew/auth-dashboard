<template>
  <div class="page-container">
    <div class="content">
        <h1>Customer page page</h1>
        <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "welcome! thanks for joining"
        }
    }
}
</script>

<style scoped lang="scss">
.page-container {
    //background: orange;
}
</style>