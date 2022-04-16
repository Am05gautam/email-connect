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
        <input
          id="tempId"
          type="text"
          placeholder="*Template #id"
          v-model="sendMail.template_id"
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="*Email.."
          v-model="sendMail.to.email"
        />
        <input type="text" placeholder="Name.." v-model="sendMail.to.name" />
        <input
          type="text"
          placeholder="*Subject"
          v-model="sendMail.dynamic_template_data.subject"
        />
        <br />
        <br />
        <input
          type="url"
          placeholder="Image_logo"
          v-model="sendMail.dynamic_template_data.img_logo"
        />
        <input
          type="text"
          placeholder="*Body  title"
          v-model="sendMail.dynamic_template_data.title"
        />

        <input
          type="text"
          placeholder="*Text field 1"
          v-model="sendMail.dynamic_template_data.text_01"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Text field 2"
          v-model="sendMail.dynamic_template_data.text_02"
        />

        <input
          type="text"
          placeholder="Text field 3"
          v-model="sendMail.dynamic_template_data.text_03"
        />
        <input
          type="url"
          placeholder="Button link"
          v-model="sendMail.dynamic_template_data.btn_href"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="*Button title"
          v-model="sendMail.dynamic_template_data.btn_name"
        />

        <input
          type="url"
          placeholder="Gallery images"
          v-model="sendMail.dynamic_template_data.gallery_img"
        />

        <input
          type="url"
          placeholder="Social link facebook"
          v-model="sendMail.dynamic_template_data.social.facebook"
        />
        <br />
        <br />
        <input
          type="url"
          placeholder="Social link twitter"
          v-model="sendMail.dynamic_template_data.social.twitter"
        />

        <input
          type="url"
          placeholder="Social link instagram"
          v-model="sendMail.dynamic_template_data.social.instagram"
        />
        <input
          type="url"
          placeholder="Social link pinterest"
          v-model="sendMail.dynamic_template_data.social.pinterest"
        />
        <br />
        <br />
        <input
          class="support"
          type="url"
          placeholder="Social link support"
          v-model="sendMail.dynamic_template_data.social.support"
        />

        <input
          class="website"
          type="url"
          placeholder="Social link website"
          v-model="sendMail.dynamic_template_data.social.website"
        />
        <br />
        <br />
        <button class="btn btn-success" type="submit">Send</button>
        <br />
        <br />
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

      (this.sendMail.to.email = ""),
        (this.sendMail.to.name = ""),
        (this.sendMail.dynamic_template_data.subject = ""),
        (this.sendMail.dynamic_template_data.text = ""),
        (this.sendMail.dynamic_template_data.img_logo = ""),
        (this.sendMail.dynamic_template_data.title = ""),
        (this.sendMail.dynamic_template_data.text_01 = ""),
        (this.sendMail.dynamic_template_data.text_02 = ""),
        (this.sendMail.dynamic_template_data.text_03 = ""),
        (this.sendMail.dynamic_template_data.btn_href = ""),
        (this.sendMail.dynamic_template_data.btn_name = ""),
        (this.sendMail.dynamic_template_data.gallery_img = ""),
        (this.sendMail.dynamic_template_data.social.facebook = ""),
        (this.sendMail.dynamic_template_data.social.twitter = ""),
        (this.sendMail.dynamic_template_data.social.instagram = ""),
        (this.sendMail.dynamic_template_data.social.pinterest = ""),
        (this.sendMail.dynamic_template_data.social.support = ""),
        (this.sendMail.dynamic_template_data.social.website = ""),
        (this.sendMail.template_id = "");
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
}
.btn:hover {
  background: black;
  color: white;
}
form input {
  width: 18%;
  height: 32px;
  margin: 5px;
}
.support,
.website {
  width: 27.5%;
}
#tempId {
  width: 56%;
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
  .support,
  .website {
    width: 70%;
  }
  #tempId {
    width: 70%;
  }
}
</style>