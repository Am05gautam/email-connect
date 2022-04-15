<template>
  <div>
    <Navbar/>
    <form @submit="loginUser" method="POST">
      <h2>Sign In</h2>
      <div>Use your account</div> <br>
      <input type="email" placeholder="Email" v-model="login.email" /> <br> <br>
      <input type="password" placeholder="Password" v-model="login.password" /> <br> <br>
      <!-- <input type="checkbox" name="remember" id="remember_me">
      <label for="remember">Remember Me</label> -->
      <a href="#">Forgot your password?</a> <br> <br>
      <button class="btn" type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
// import HomeComponent from './HomeComponent.vue'
import Navbar from './Navbar';
export default {
  name: "LogIn",
  components:{
    Navbar,
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser(e) {
      axios
        .post("https://emailconnect.herokuapp.com/auth/login", {
          email: this.login.email,
          password: this.login.password,
        })
        .then((res) => {
          console.warn(res);
          // console.warn(res.data.token, res.data.userId);
          localStorage.setItem('User', res.data.token);
          this.$router.push('/home');
        })
        .catch((err) => {
          // console.warn(err.response.data.message);
          alert(err.response.data.message);
        });
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.btn{
  /* background: #ffe01b; */
  border: solid 1px black;
  border-radius: 1px;
  cursor: pointer;
  width: 6em;
  letter-spacing: 1.3px;
} 
.btn:hover{
  background: black;
  color: white;
}
form input{
  width: 18%;
  height: 32px;
}
</style>