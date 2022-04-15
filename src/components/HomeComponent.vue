<template>
  <NavbarComponent2 />
  <div class="container-fluid center">
    <h2>Stuck in choosing email?</h2>
    <h5>Please select a type :</h5>
    <div class="row">
      <div class="col-lg-6">
        <img @click="dTemplate()"
          class="image-field"
          src="https://www.atomicscope.com/wp-content/uploads/2020/06/Dynamic-Email-Template-Engine.png"
          alt="dynamic_template_img"
        />
        <div class="overlay">
          <div @click="dTemplate()" class="text">Dynamic Template Email</div>
        </div>
      </div>
      <div class="col-lg-6">
        <img v-on:click="sMail"
          class="image-field"
          src="https://www.cloudways.com/blog/wp-content/uploads/Email-Hosting-Small-Business.jpg"
          alt="simple_email"
        />
        <div class="overlay">
          <div v-on:click="sMail" class="text">Group Email</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NavbarComponent from './Navbar';
import NavbarComponent2 from "./Navbar2.vue";
export default {
  name: "HomeComponent",
  components: {
    NavbarComponent2,
  },
  methods:{
    dTemplate(){
      this.$router.push('/home/dynamic_template');
    },
    sMail(){
      this.$router.push('/home/sendsmail');
    }
  }
};
</script>

<style scoped>
.container-fluid {
  font-family: Georgia, Times, Times New Roman, serif;
}

.image-field {
  height: 20rem;
  width: 32rem;
  transition: transform 0.2s;
  padding: 20px;
  cursor: pointer;
}
/* .image-field:hover {
  transform: scale(1.1);
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.455);
} */
.row {
  padding: 15px;
  margin: 35px;
}
.text {
  background-color: #04aa6d;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  margin-left: 50px;
  margin-right: 50px;
  cursor: pointer;
  transition: transform 0.2s;
}
.text:hover{
  transform: scale(1.1);
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.455);
}
/* .container {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover img {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
} */
</style>