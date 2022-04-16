<template>
  <div class="nav">
    <div class="links">
      <a href="/">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>

    <div v-on:click="routeToHome" class="icon">
      <img
        src="https://pngimage.net/wp-content/uploads/2018/06/monkey-logo-png.png"
        alt="logo"
      />
      <strong>E-Connect</strong>
    </div>

    <div class="register">
      <button @click="login()" class="btn btn-log">Log In</button>
      <button @click="signup()" class="btn btn-reg">Sign Up Free</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  methods: {
    login() {
      this.$router.push("/login");
    },
    signup() {
      this.$router.push("/signup");
    },
    routeToHome(){
      this.$router.push('/');
    }
  },
};
</script>

<style scoped>
.nav {
  font-family: Georgia, "Times New Roman", Times, serif;
  height: 7.75rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10rem;
  scroll-behavior: smooth;
  background: #ffe01b;
}
a {
  text-decoration: none;
  color: black;
  float: left;
  text-align: center;
  padding: 25px;
  align-items: center;
  justify-content: space-between;
}
.nav:hover {
  background-color: white;
}
a:hover {
  text-decoration: underline;
  color: #007c89;
}
.icon {
  flex-grow: 1;
}
.register {
  flex-grow: 1;
  text-align: end;
}
.icon strong{
  font-size: 18px; text-decoration: overline
}
.icon img {
  height: 5rem;
  margin: 8px;
}
.btn {
  margin: 8px;
  border: solid 1px black;
  border-radius: 1px;
  line-height: 2em;
  cursor: pointer;
  width: 6em;
}
.btn-reg {
  background-color: #007c89;
  color: white;
  width: 8em;
}
.btn-reg:hover {
  background-color: #004e56;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .nav {
    background: white;
    height: 7rem;
    margin-bottom: 7.5rem;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.455);
  }
  a, strong, .btn-reg {
    display: none;
  }
  .icon img{
    height: 7rem;
    margin: 0px;
    float: left;
  }
  .btn-log{
    background: black;
    color: white;
  }
}
</style>