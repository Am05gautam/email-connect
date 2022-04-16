<template>
  <div class="nav">
    <div class="links">
      <a href="/home">Home</a>
      <a href="/home/dynamic_template">Dynamic Template</a>
      <a href="/home/sendsmail">Group Email</a>
    </div>

    <div @click="routeToHome" class="icon">
      <img
        src="https://pngimage.net/wp-content/uploads/2018/06/monkey-logo-png.png"
        alt="logo"
      />
      <strong style="font-size: 18px; text-decoration: overline"
        >E-Connect</strong
      >
    </div>

    <div class="logout">
      <button @click="logout()" class="btn btn-logout">Log Out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push('/');
    },
    routeToHome(){
      this.$router.push('/home');
    }
  }
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
  margin-bottom: 8rem;
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
.logout {
  flex-grow: 1;
  text-align: end;
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
.btn-logout {
  background-color: rgba(240, 66, 66, 0.97);
  color: white;
  width: 8em;
}
.btn-logout:hover {
  background-color: rgba(255, 4, 4, 0.868);
}

@media only screen and (max-width: 768px) {
  .nav {
    background: white;
    height: 6rem;
    margin-bottom: 0.5rem;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.455);
  }
  a, strong {
    display: none;
  }
  .icon img{
    height: 7rem;
    margin: 0px;
    float: left;
  }
  .btn-logout{
    width: 8.5rem;
  }
}
</style>