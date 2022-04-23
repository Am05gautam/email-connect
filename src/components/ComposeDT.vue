<template>
  <div style="font-family: Georgia, Times, Times New Roman, serif">
    <Navbar />
    <div class="container">
      <h2>
        Fill the necessary(*) details in the form <br />
        <h4>(Use your copied template #id here)</h4>
      </h2>
      <br />
      <form class="send_mail" @submit="send_mail" method="POST">
        <div class="info">
          <label style="margin-right: 4rem" for="id">Template ID : </label>
          <input
            id="tempId"
            type="text"
            placeholder="*Paste Here.."
            v-model="sendMail.template_id"
          />
        </div>

        <div class="info">
          <label style="margin-right: 11rem" for="to">To : </label>
          <input
            type="email"
            placeholder="*Email.."
            v-model="sendMail.to.email"
          />
          <br>
          <span style="margin-right: 13.7rem"></span>
          <input type="text" placeholder="Name.." v-model="sendMail.to.name" />
        </div>
        <div class="info">
          <label style="margin-right: 7.5rem" for="subject">Subject : </label>
          <input
            type="text"
            placeholder="*Subject"
            v-model="sendMail.dynamic_template_data.subject"
          />
        </div>

        <div class="info">
          <label style="margin-right: 4.5rem" for="logo_url">Brand Logo : </label>
          <input
            type="url"
            placeholder="Enter the URL.."
            v-model="sendMail.dynamic_template_data.img_logo"
          />
        </div>
        <div class="info">
          <label style="margin-right: 4.5rem" for="body">Email Body :</label>
          <input
            type="text"
            placeholder="*Heading"
            v-model="sendMail.dynamic_template_data.title"
          /><br>
          <span style="margin-right: 13.7rem"></span>
          <input
            type="text"
            placeholder="*Text"
            v-model="sendMail.dynamic_template_data.text_01"
          /> <br>
          <span style="margin-right: 13.7rem"></span>
          <input
            type="text"
            placeholder="*Button: Title"
            v-model="sendMail.dynamic_template_data.btn_name"
          /><br>
          <span style="margin-right: 13.7rem"></span>
          <input
            type="url"
            placeholder="Button: Link(URL)"
            v-model="sendMail.dynamic_template_data.btn_href"
          />
        </div>

        <div class="info">
          <label style="margin-right: 4.5rem" for="images">Add Images : </label>
          <input
            type="url"
            placeholder="Enter URL"
            v-model="sendMail.dynamic_template_data.gallery_img"
          />
        </div>

        <div class="info">
          <label style="margin-right: 0.8rem" for="social_links">Connect With Us :</label>
          <input
            type="url"
            placeholder="Facebook"
            v-model="sendMail.dynamic_template_data.social.facebook"
          /><br>
          <span style="margin-right: 13.7rem"></span>
          <input
            type="url"
            placeholder="Twitter"
            v-model="sendMail.dynamic_template_data.social.twitter"
          />
          <br>
          <span style="margin-right: 13.7rem"></span>
          <input
            type="url"
            placeholder="Instagram"
            v-model="sendMail.dynamic_template_data.social.instagram"
          /><br>
          <span style="margin-right: 13.7rem"></span>
          <input
            type="url"
            placeholder="Pinterest"
            v-model="sendMail.dynamic_template_data.social.pinterest"
          />
        </div>
        <br />
        <button class="btn" type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar2";
import axios from "axios";
export default {
  name: "ComposeDT",
  components: {
    Navbar,
  },
  data() {
    return {
      sendMail: {
        to: { email: "", name: "" },
        dynamic_template_data: {
          subject: "",
          text: "",
          img_logo: "",
          title: "",
          text_01: "",
          text_02: "",
          text_03: "",
          btn_href: "",
          btn_name: "",
          gallery_img: "",
          social: {
            facebook: "",
            twitter: "",
            instagram: "",
            pinterest: "",
            support: "",
            website: "",
          },
        },
        template_id: "",
      },
      token: "",
    };
  },
  methods: {
    send_mail(e) {
      e.preventDefault();
      const data = {
        to: {
          email: this.sendMail.to.email,
          name: this.sendMail.to.name,
        },
        dynamic_template_data: {
          subject: this.sendMail.dynamic_template_data.subject,
          text: this.sendMail.dynamic_template_data.text,
          img_logo: this.sendMail.dynamic_template_data.img_logo,
          title: this.sendMail.dynamic_template_data.title,
          text_01: this.sendMail.dynamic_template_data.text_01,
          text_02: this.sendMail.dynamic_template_data.text_02,
          text_03: this.sendMail.dynamic_template_data.text_03,
          btn_href: this.sendMail.dynamic_template_data.btn_href,
          btn_name: this.sendMail.dynamic_template_data.btn_name,
          gallery_img: this.sendMail.dynamic_template_data.gallery_img,
          social: {
            facebook: this.sendMail.dynamic_template_data.social.facebook,
            twitter: this.sendMail.dynamic_template_data.social.twitter,
            instagram: this.sendMail.dynamic_template_data.social.instagram,
            pinterest: this.sendMail.dynamic_template_data.social.pinterest,
            support: this.sendMail.dynamic_template_data.social.support,
            website: this.sendMail.dynamic_template_data.social.website,
          },
        },
        template_id: this.sendMail.template_id,
      };
      // return console.warn(data);
      axios
        .post("https://emailconnect.herokuapp.com/auth/sendDT", data, {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          console.warn(err.response.data.message);
        });

      this.sendMail.to.email = "",
      this.sendMail.to.name = "",
      this.sendMail.dynamic_template_data.subject = "",
      this.sendMail.dynamic_template_data.text = "",
      this.sendMail.dynamic_template_data.img_logo = "",
      this.sendMail.dynamic_template_data.title = "",
      this.sendMail.dynamic_template_data.text_01 = "",
      this.sendMail.dynamic_template_data.text_02 = "",
      this.sendMail.dynamic_template_data.text_03 = "",
      this.sendMail.dynamic_template_data.btn_href = "",
      this.sendMail.dynamic_template_data.btn_name = "",
      this.sendMail.dynamic_template_data.gallery_img = "",
      this.sendMail.dynamic_template_data.social.facebook = "",
      this.sendMail.dynamic_template_data.social.twitter = "",
      this.sendMail.dynamic_template_data.social.instagram = "",
      this.sendMail.dynamic_template_data.social.pinterest = "",
      this.sendMail.dynamic_template_data.social.support = "",
      this.sendMail.dynamic_template_data.social.website = "",
      this.sendMail.template_id = "";
    },
  },
  mounted() {
    let user = localStorage.getItem("User");
    if (!user) {
      alert("Please login in!");
      this.$router.push("/login");
    } else {
      this.token = JSON.parse(user).token;
    }
  },
};
</script>

<style scoped>
.btn {
  /* background: #ffe01b; */
  border: solid 1px black;
  border-radius: 1px;
  cursor: pointer;
  width: 6em;
  letter-spacing: 1.3px;
  margin-left: 15.5rem;
}
.btn:hover {
  background: black;
  color: white;
}
form input {
  width: 40%;
  height: 32px;
  margin: 6px;
  padding: 2px;
}
.send_mail {
  text-align: left;
  padding: 5rem;
  background-image: url("https://images.unsplash.com/photo-1589278560468-2f9bbaf07e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80");
  background-size: cover;
}
.info{
  margin: 5px;
  padding: 5px;
}

@media only screen and (max-width: 768px) {
  .container {
    background: #ffe01b;
    margin: 0px;
    padding-top: 5rem;
  }
  form input {
    width: 70%;
  }
  form textarea {
    width: 70%;
  }
}
</style>