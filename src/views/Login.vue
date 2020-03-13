<template>
  <div class="page-container">
      <div class="content">
        <h1>Login</h1>
        <input v-model="email" name="email" type="text" placeholder="Email address" class="email-input"><br>
        <input v-model="password" name="password" type="password" placeholder="Password" class="password-input"><br>
                <button class="button auth-button" @click="loginButtonPressed">Login</button>
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
    created() {
      firebase.auth().onAuthStateChanged(userAuth => {
          if (userAuth) {
            //document.location.reload();
          }
      });
    },
    
    methods: {
      async loginButtonPressed() {
        try {
          var {
            user
          } = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
        } catch (error) {
          console.log(user);
          console.log(error.message);
        }
        console.log("ROUTING TO PROFILE");
        this.$router.push("/customer");
      }
    }
  };
</script>

<style scoped lang="scss">
.page-container {
    //background: lightblue;
}
</style>