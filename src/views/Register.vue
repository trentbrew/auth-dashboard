<template>
  <div class="page-container">
      <div class="content">
        <h1>Sign up</h1>
        <input v-model="email" type="text" placeholder="Email address" class="email-input"><br>
        <input v-model="password" type="password" placeholder="Password" class="password-input"><br>
        <button class="button auth-button" @click="registerButtonPressed">Signup</button>
      </div>
  </div>
</template>

<script>
  import firebase from "firebase";

  export default {
    data() {
      return {
        email: "",
        password: ""
      };
    },
    methods: {
      async registerButtonPressed() {
        try {
          var {
            user
          } = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
          // signout
          firebase.auth().signOut().then(user => {
              this.$router.push("/login");
              console.log(user);
          });
        } catch (error) {
          console.log(user);
          console.log(error.message);
        }
      }
    }
  };
</script>

<style scoped lang="scss">
.page-container {
    //background: yellow;
}
</style>