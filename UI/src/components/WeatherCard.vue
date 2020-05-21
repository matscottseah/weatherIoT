<template>
  <li class="weather-card">
    <img class="weather-card__image" :src="weather.image" :alt="weather.tag" />
    <div class="weather-card__body">
      <p v-if="weather.location" class="weather-location">{{weather.location}}</p>
      <p v-else class="weather-location">No Title Found</p>
      <p class="weather-temperature">{{weather.temperature}}º F</p>
      <section class="weather-view-wrapper">
        <p class="weather-info">Precipitation: {{weather.precipitation}}%</p>
        <p class="weather-info">Humidity: {{weather.humidity}}%</p>
      </section>
      <section class="weather-view-wrapper">
        <p class="weather-info">Visibility: {{weather.visibility}} miles</p>
        <p class="weather-info">Wind: {{weather.wind}} mph</p>
      </section>
    </div>
  </li>
</template>

<script>
export default {
  name: "WeatherCard",
  props: ["weather"]
};
</script>

<style lang="scss">
.image-card {
  width: calc(33% - 1rem);
  margin: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background: white;
  @media only screen and (max-width: 799px) {
    width: calc(50% - 1rem);
  }
  @media only screen and (max-width: 549px) {
    width: 100%;
    margin: 0.5rem 0;
  }
}
.weather-card__image {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.weather-card__body {
  padding: 0.5rem 1rem 1rem;
}
.weather-location {
  font-weight: bold;
  margin: 0;
}
.weather-temperature {
  margin-top: 0;
  font-size: 0.8rem;
}
.weather-location,
.weather-temperature {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.weather-view-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.weather-info {
  margin-bottom: 0;
  font-size: 0.8rem;
}
</style>
