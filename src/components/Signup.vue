<template>
  <Navbar/>
  <form class="sign-up" @submit="signupUser" method="POST">
    <h2>Register yourself</h2>
    <div>Use your email for registration</div> <br>
    <input type="text" placeholder="Name" v-model="signup.name" /> <br> <br>
    <input type="email" placeholder="Email" v-model="signup.email" /> <br> <br>
    <input type="password" placeholder="Password" v-model="signup.password" /> <br> <br>
    <button class="btn" type="submit">Sign Up</button> <br>
  </form>
</template>

<script>
import Navbar from './Navbar';
import axios from "axios";
export default {
  name: "SignUp",
  components:{
    Navbar,
  },
  data: () => {
    return {
      signup: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signupUser(e) {
      // console.warn(this.signup.name, this.signup.email, this.signup.password);
      axios
        .put("https://emailconnect.herokuapp.com/auth/signup", {
          name: this.signup.name,
          email: this.signup.email,
          password: this.signup.password,
        })
        .then((res) => {
          // console.warn(res.data);
          // console.warn(res.data.message, res.data.userId);
          alert(res.data.message);
          this.$router.push('/login');
        })
        .catch((err) => {
          console.warn(err.response.data.message);
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
  width: 20%;
  height: 32px;
}
</style>