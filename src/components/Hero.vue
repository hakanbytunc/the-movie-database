<template>
  <div class="heroSection">
    <div class="hero-title">
      <h2>Welcome.</h2>
      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
    </div>
    <div class="hero-search">
      <form>
        <input
          type="text"
          placeholder="Search for a movie, tv show, person..."
          name="search"
          v-model="query"
          @keyup="getResult(query)"
        />
        <button type="submit" id="search-button">Search</button>
      </form>
    </div>
  </div>
  <h2>What's Popular</h2>
  <div class="movies-section">
    <div class="movies" v-for="item in items" :key="item.id">
      <button @click="goToDetails(item.id)">
        <img
          v-bind:src="'http://image.tmdb.org/t/p/w200' + item.poster_path"
          alt=""
        />
        <div class="votes">
          <p v-if="item.vote_average != '0'">{{ item.vote_average * 10 }}%</p>
          <p v-if="item.vote_average == '0'">NR</p>
        </div>
        <div class="names">
          <p v-if="item.original_title">{{ item.original_title }}</p>
          <p v-if="item.name">{{ item.name }}</p>
        </div>
        <div class="dates">
          <p v-if="item.first_air_date">{{ item.first_air_date }}</p>
          <p v-if="item.release_date">{{ item.release_date }}</p>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router/router";
import { saveID } from "@/models/getMovieDetails.js";

export default {
  name: "Hero",
  data() {
    return {
      query: "",
      items: "",
    };
  },
  methods: {
    getResult(query) {
      if (query == "") {
        axios
          .get(
            process.env.VUE_APP_BASE_URL +
              "/movie/popular?api_key=" +
              process.env.VUE_APP_KEY
          )
          .then(
            (response) => (
              (this.items = response.data.results), console.log(this.items)
            )
          );
      }
      axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/search/movie?api_key=" +
            process.env.VUE_APP_KEY +
            "&query=" +
            query
        )
        .then((response) => {
          this.items = response.data.results;
        });
    },
    goToDetails(selected) {
      saveID(selected);
      router.push("details");
    },
  },
  mounted() {
    axios
      .get(
        process.env.VUE_APP_BASE_URL +
          "/movie/popular?api_key=" +
          process.env.VUE_APP_KEY
      )
      .then((response) => (this.items = response.data.results));
  },
};
</script>

<style scoped lang="scss">
.heroSection {
  background-image: linear-gradient(
      rgba(25, 29, 67, 0.387),
      rgba(25, 29, 67, 0.387)
    ),
    url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/iDbIEpCM9nhoayUDTwqFL1iVwzb.jpg");
  padding-top: 120px;
  padding-left: 80px;
  margin-left: -10px;
  margin-right: -10px;
  padding-bottom: 100px;
  .hero-title {
    h2 {
      color: white;
      font-size: 55px;
      padding-left: 0px;
    }
    p {
      color: white;
      font-size: 35px;
      margin-top: -40px;
    }
  }
  .hero-search {
    form {
      font-size: 17px;
      background: transparent;
      input {
        border-radius: 30px;
        border: none;
        width: 90%;
        height: 20px;
        padding: 20px;
      }
      input::placeholder {
        font-size: 17px;
      }
      input[type="text"] {
        font-size: 25px;
      }
      button {
        border-radius: 30px;
        width: 150px;
        margin-left: -150px;
        padding: 20px;
        background-image: linear-gradient(
          to right,
          rgb(47, 212, 171),
          rgb(31, 182, 223)
        );
        border: none;
        color: white;
        font-size: 17px;
        font-weight: 600;
      }
      button:hover {
        color: black;
      }
    }
  }
}

h2 {
  color: black;
  font-size: 30px;
  padding-top: 20px;
  padding-left: 60px;
}

.movies-section {
  word-wrap: break-word;
  padding-top: 5px;
  padding-left: 45px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  .movies {
    padding-right: 25px;
    display: inline-block;
    vertical-align: top;

    button {
      border: none;
      background: none;
    }
  }
  img {
    cursor: pointer;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  img:hover {
    box-shadow: rgba(0, 0, 0, 1) 0px 3px 8px;
  }
  p {
    width: 200px;
    white-space: normal;
  }
  .votes {
    background: rgb(9, 28, 34);
    border: solid 1px white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -30px;
    margin-left: 10px;
    position: relative;
    p {
      width: auto;
      color: white;
      font-weight: 600;
    }
  }
  .names {
    margin-left: 10px;
    font-size: 20px;
    color: black;
  }
  .dates {
    margin-left: 10px;
    color: grey;
    margin-top: -10px;
    font-weight: 100;
  }
}
@media screen and (max-width: 1100px) {
  #search-button{
    visibility: hidden;
  }
  .hero-title{
    margin-right:40px;
  }
}
</style>
