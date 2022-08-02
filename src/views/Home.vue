<template>
  <div id="map"></div>
  <D3Layer />
</template>

<script>
// @ is an alias to /src
import D3Layer from '@/components/D3Layer.vue'
import mapboxgl from 'mapbox-gl'

export default {
  name: 'Home',
  
  components: {
    D3Layer
  },

  mounted: async function() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubmxpY2giLCJhIjoieUxHOHQyNCJ9.VLDDBTTdzeHKJvR5ABYaLA'

    const map = window.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [7.5, 58],
      zoom: 9,
    })

    // Wait for map style to load
    await new Promise((resolve) => map.on('load', () => resolve()))

    // When the map is in the store, it's ready to use
    this.$store.commit('setMap', map)
  }
}
</script>

<style lang="scss" scoped>
#map {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

.mapboxgl-canvas {
  outline: none !important;
}
</style>