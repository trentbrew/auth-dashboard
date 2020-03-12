<template>
  <div class="page-container">
    <div class="content">
        <h1>About us</h1>
        <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "we are awesome<3"
        }
    }
}
</script>

<style scoped lang="scss">
.page-container {
    //background: purple;
}
</style>