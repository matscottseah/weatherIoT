<template>
  <div>
    <nav class="navbar">
      <form class="searchbar">
        <label>
          <span class="screen-reader-only">Search:</span>
          <input v-model="tag" placeholder="Location" type="text" class="searchbar-input" />
        </label>
        <button type="submit" class="btn btn--green btn--go" @click.prevent="search">Go</button>
      </form>
    </nav>
    <div class="wrapper">
      <p v-if="loading" class="text-centered">Loading...</p>
      <ul v-else class="weather-card-grid">
        <weather-card v-for="weather in weatherData" :key="weather.deviceID" :weather="weather" />
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WeatherCard from "@/components/WeatherCard.vue";

export default {
  name: "home",
  components: {
    WeatherCard
  },
  data() {
    return {
      loading: false,
      tag: "",
      weatherData: []
    };
  },
  methods: {
    search() {
      this.weatherData = [];
      this.loading = true;
      this.fetchWeather()
        .then(response => {
          console.log(response);
          console.log(response.data);
          let weather = response.data;
          weather.image = "https://xxxxxxxxxxxxx.s3.amazonaws.com/sun.png";
          this.weatherData.push(weather);
          this.loading = false;
        })
        .catch(error => {
          console.log("An error ocurred: ", error);
        });
    },
    fetchWeather() {
      let deviceID = this.computeDeviceID(this.tag);
      let url =
        "https://xxxxxxxxxx.execute-api.xxxxxxxxx.amazonaws.com/xxxx/" +
        deviceID;
      return axios({
        method: "get",
        url: url
      });
    },
    computeDeviceID(location) {
      switch (location) {
        case "Austin":
          return "BnxDlJXqh";
        case "San Jose":
          return "dmEP1A96D";
        case "New York":
          return "uufMl0eh4";
      }
    }
  }
};
</script>

<style lang="scss">
.screen-reader-only {
  height: 1px;
  width: 1px;
  position: absolute;
  left: -100000px;
}
.text-centered {
  text-align: center;
}
.wrapper {
  margin: 0 auto;
  max-width: 800px;
  @media only screen and (max-width: 799px) {
    max-width: 100%;
    margin: 0 1.5rem;
  }
}
.weather-card-grid {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #f0f0f0;
}
.searchbar {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 549px) {
    width: 100%;
    label {
      width: 80%;
    }
  }
}
.searchbar-input {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  border: 1px solid gray;
  min-width: 300px;
  @media only screen and (max-width: 549px) {
    min-width: 0;
    width: 100%;
  }
}
.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 20px;
  background: transparent;
  border: none;
}
.btn--green {
  background: #42b983;
  color: white;
  font-weight: bold;
}
.btn--go {
  padding: 0.5rem 2rem;
  margin-left: 1rem;
}
</style>
