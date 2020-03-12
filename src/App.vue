<template>
  <div id="app">
    <div id="nav">
      <div class="logo-container">
        <div class="logo"></div>
      </div>
      <ul class="nav-inner">
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/about"><li>About</li></router-link>
        <li class="divider">|</li>
        <router-link to="/register"><li>Signup</li></router-link>
        <router-link to="/login"><li>Login</li></router-link>
        <router-link to="/admin"><li>Admin</li></router-link>
        <router-link to="/driver"><li>Driver</li></router-link>
        <router-link to="/customer"><li>Customer</li></router-link>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
$navHeight: 80px;

body {
  margin: 0px;
}

input {
  margin-bottom: 12px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  //padding: 24px;
  z-index: 12;
  background:white;
  position: fixed;
  width: 100%;
  height: $navHeight;

  .divider {
    opacity: 0.6;
    cursor: default;

    &:hover {
      background: transparent;
    }
  }
  li {
    //transition: 200ms;

    &:hover {
      background: rgba(black, 0.05);
    }
  }

  .nav-inner {
    list-style: none;
    display: inline-flex;
    padding: 0px;
    position: absolute;
    height: 80px;
    width: max-content;
    right: 0px;
    margin: 0px;
    line-height: $navHeight;
    margin-right: 24px;

    li {
      margin: 0px;
      padding-left: 12px;
      padding-right: 12px;
    }
  }

  a {
    font-weight:200;
    color: #2c3e50;
    //margin-left: 12px;
    //margin-right: 12px;
    text-decoration: none;

    &.router-link-exact-active {
      color: brown;
      text-decoration: underline;
    }
  }
}

.page-container {
  margin: 0px;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:-1;
}

.logo-container {
  //background: red;
  height: $navHeight;
  width: 160px;
  position: absolute;
  //left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    //background: yellow;
    height: 60px;
    width: 120px;
    background-image: url("assets/HBR-Logo.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
