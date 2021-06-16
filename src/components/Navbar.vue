<template>
  <div class="container">
    <div id="navigation-bar">
      <nav>
        <ul>
          <div id="left-items">
            <li>
              <a @click="goTo()" id="logo">
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt="brand-logo"
              /></a>
            </li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">More</a></li>
          </div>
          <div id="right-items">
            <li><a href="#">+</a></li>
            <li><a href="#">EN</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Join TBMD</a></li>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import router from "@/router/router";

export default {
  name: "Navbar",
  methods:{
    goTo(){
      router.push("/");
    }
  }
};
</script>

<style scoped lang="scss">
#container {
  width: 100%;
  display: inline-block;
}

nav {
  overflow: hidden;
  background-color: rgb(5,38,64);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ul {
    text-align: center;
    list-style-type: none;
    list-style-type: none;
    margin: 0;
    padding: 30px;
    #left-items {
      float: left;
      padding-bottom:30px;
    }
    #right-items {
      float: right;
      padding-bottom:30px;
    }
    li {
      display: inline;
      font-family: "Fira Sans", sans-serif;
      font-size: 20px;
      a {
        color: #f2f2f2;
        text-decoration: none;
        padding: 20px;
        img {
          width: 200px;
          float: left;
        }
      }
    }
  }
}

.content {
  text-align: center;
}
</style>
