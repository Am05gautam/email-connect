<template>
  <div class="container">
    <NavbarComponent />

    <div class="row mx-0">
      <div class="col-lg-2"></div>
      <div class="col-lg-5">
        <p class="head-content">
          Send emails with<br />
          Dynamic templates <br />
        </p>
        <p class="info-content">
          Over 13 million businesses rely on E-Connect to create and send
          engaging emails that reach the right people, build better
          relationships, and help drive revenue and growth. You can too.
        </p>
        <br />
        <button @click="signup" class="btn btn-reg">Sign Up</button>
      </div>
      <div class="col-lg-3">
        <img class="herosection" src="../../utility/img01.gif" alt="gif" />
      </div>
      <div class="col-lg-2"></div>
    </div>

    <!-- <div class="row center">
      <p class="head-content">
        Why E-connect? <br />
      </p>
    </div> -->
  </div>
</template>

<script>
import NavbarComponent from "./Navbar.vue";
export default {
  name: "WelcomePage",
  components: {
    NavbarComponent,
  },
  methods: {
    signup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  background: #ffe01b;
  padding-left: 0em;
  padding-right: 0em;
}
.row {
  font-family: Georgia, Times, Times New Roman, serif;
  text-align: left;
  letter-spacing: 1.1px;
  margin: auto;
}
.head-content {
  font-size: 4.6rem;
}
.info-content {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 1.2em;
  font-size: 1.8rem;
}
.btn {
  border: solid 1px black;
  border-radius: 1px;
  line-height: 3em;
  cursor: pointer;
  width: 6em;
  letter-spacing: 1.3px;
}
.btn-reg {
  background-color: #007c89;
  color: white;
  width: 8em;
}
.btn-reg:hover {
  background-color: #004e56;
}
.herosection {
  height: 33rem;
}

@media only screen and (max-width: 768px) {
  .head-content {
    font-size: 4.2rem;
  }
  .info-content {
    font-size: 1.6rem;
  }
  .herosection {
    display: none;
  }
}
</style>