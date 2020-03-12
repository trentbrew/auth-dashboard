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
            firebase.auth().currentUser.getIdTokenResult().then(tokenResult => {
              console.log(tokenResult.claims);
              //console.log(userAuth);
            });
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
      }
    }
  };
</script>

<style scoped lang="scss">
.page-container {
    //background: lightblue;
}
</style>