<template>
  <div>
    <NavbarComponent />
    <div class="container center">
      <!-- enctype="multipart/form-data" -->
      <form class="send_mail" @submit="send_mail" method="POST">
        <h2>Send Group Emails</h2>
        <div>Compose the mail:</div>
        <br />
        <input type="email" placeholder="To.." v-model="sendMail.email" />
        <br />
        <br />
        <input type="text" placeholder="Subject" v-model="sendMail.subject" />
        <br />
        <br />
        <textarea
          name="text"
          id="text"
          cols="35"
          rows="7"
          v-model="sendMail.text"
          placeholder="Text"
        ></textarea>
        <br />
        <br />
        <!-- <label for="file">Attachements:</label>
      <input type="file" id="file">
      <br />
      <br /> -->
        <button class="btn" type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "./Navbar2";
import axios from "axios";
// const form = document.getElementById("my_form");
export default {
  name: "ComposeEmail",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      sendMail: {
        email: "",
        subject: "",
        text: "",
      },
      token:""
    };
  },
  methods: {
    send_mail(e) {
      const data = {
        email: this.sendMail.email,
        subject: this.sendMail.subject,
        text: this.sendMail.text
      };
      // console.warn (JSON.stringify(data));
      axios
        .post(
          "https://emailconnect.herokuapp.com/auth/email", data,
          { headers: { Authorization: `Bearer ${this.token}` } }
        )
        .then((res) => {
          // console.warn(res.data.message);
          alert(res.data.message);
        })
        .catch((err) => {
          console.warn(err.response.data.message);
        });

      this.sendMail.email = "";
      this.sendMail.subject = ""; 
      this.sendMail.text = "";

      e.preventDefault();
    },
  },
  mounted() {
    let user = localStorage.getItem("User");
    if (!user) {
      alert("Please login in!");
      this.$router.push("/login");
    }
    else{
      this.token = JSON.parse(user).token;
    }
  },
};
</script>

<style scoped>
.container {
  font-family: Georgia, Times, Times New Roman, serif;
  margin: 35px;
  padding: 15px;
}
.btn {
  border: solid 1px black;
  border-radius: 1px;
  cursor: pointer;
  width: 6em;
  letter-spacing: 1.3px;
}
.btn:hover {
  background: black;
  color: white;
}
form input {
  width: 24.8%;
  height: 32px;
}
#file {
  margin: auto;
}

@media only screen and (max-width: 768px) {
  .container {
    background: #ffe01b;
    margin: 0px;
    padding-top: 5rem;
    height: 100vh;
    width: 100vw;
  }
  form input {
    width: 70%;
  }
  form textarea {
    width: 70%;
  }
}
</style>