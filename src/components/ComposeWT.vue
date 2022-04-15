<template>
  <div style="font-family: Georgia, Times, Times New Roman, serif">
    <Navbar />
    <h2>
      Choose the appropriate template <br />
      <h4>for your email:</h4>
    </h2>
    <br />
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 container">
          <img src="../../utility/img08.gif" alt="img01" />
          <div class="middle">
            <div @click="copyURL1" class="text">DEAL OTD</div>
          </div>
        </div>
        <div class="col-lg-3 container">
          <img src="../../utility/img07.gif" alt="img01" />
          <div class="middle">
            <div @click="copyURL2" class="text">TRAVEL/ADVENTURE</div>
          </div>
        </div>
        <div class="col-lg-3 container">
          <img src="../../utility/img09.gif" alt="img01" />
          <div class="middle">
            <div @click="copyURL3" class="text">EVENT/MUSIC</div>
          </div>
        </div>
        <div class="col-lg-3 container">
          <img src="../../utility/img10.gif" alt="img01" />
          <div class="middle">
            <div @click="copyURL4" class="text">SIGNUP</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar2";
export default {
  name: "ComposeDT",
  components: {
    Navbar,
  },
  methods:{
    async copyURL1() {
      try {
        await navigator.clipboard.writeText(
          "d-00ca2d68aeb649548d723ea444488122"
        );
        alert("Copied");
        this.$router.push("/home/dynamic_template/form");
      } catch ($e) {
        alert("Cannot copy");
      }
    },
    async copyURL2() {
      try {
        await navigator.clipboard.writeText(
          "d-45c71a44011b48bead2a9bab5279a086"
        );
        alert("Copied");
        this.$router.push("/home/dynamic_template/form");
      } catch ($e) {
        alert("Cannot copy");
      }
    },
    async copyURL3() {
      try {
        await navigator.clipboard.writeText(
          "d-b41d656a58f64e0dac3ab38a492eec8a"
        );
        alert("Copied");
        this.$router.push("/home/dynamic_template/form");
      } catch ($e) {
        alert("Cannot copy");
      }
    },
    async copyURL4() {
      try {
        await navigator.clipboard.writeText(
          "d-f3a0b47d868346fb892f8927253c5481"
        );
        alert("Copied");
        this.$router.push("/home/dynamic_template/form");
      } catch ($e) {
        alert("Cannot copy");
      }
    },
  },
};
</script> 

<style scoped>
.container {
  padding: 15px;
  /* margin: auto; */
  display: flex;
  flex-direction: row;
  height: 50rem;
  position: relative;
  width: auto;
  cursor: pointer;
}
img {
  margin: 5px;
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
}

.text {
  background-color: #04aa6d;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
.middle p {
  visibility: hidden;
}
</style>