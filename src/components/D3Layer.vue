<template>
  <div></div>
</template>
<script>
import * as d3 from 'd3'
import * as turf from '@turf/turf'
import mapboxgl from 'mapbox-gl';

import { mapState } from 'vuex'

export default {

  name: 'D3Layer',

  computed: {
    ...mapState([
      'map',
    ]),
  },

  methods: {
    maybeInitSVGLayer() {
      // Already initted, or not actually ready to init this component yet
      if (this.svg || !this.map) return

      // Get Mapbox map canvas container
      var canvas = this.map.getCanvasContainer()

      // Overlay d3 on the map
      this.svg = d3.select(canvas).append("svg")
        .attr("class", "mapbox-d3-container")

      this.defs = this.svg.append("defs")

      // Layer ordering determined here
      this.circles = this.svg.append('g').attr('class', 'circles')

      this.randomizeData()

      this.map.on("viewreset", () => this.render())
      this.map.on("move", () => this.render())
      this.map.on("moveend", () => this.render())

      this.map.on("click", () => this.randomizeData())
    },

    project(d) {
      return this.map.project(new mapboxgl.LngLat(+d[0], +d[1]))
    },

    translate(d) {
      let coord = this.project(d.geometry.coordinates)
      return `translate(${coord.x},${coord.y})`
    },

    randomizeData() {
      let numPoints = 500
      let mapBounds = this.map.getBounds()
      this.data = turf.randomPoint(numPoints, {
        bbox: [mapBounds.getWest(), mapBounds.getNorth(), mapBounds.getEast(), mapBounds.getSouth()]
      })
      this.render({ transition: true })
    },

    render({ transition } = { transition: false }) {
      if (!this.svg) return

      let circles = this.circles.selectAll('.circle').data(this.data.features)

      // Update
      let circlesUpdate = circles
      if (transition) {
        circlesUpdate = circles.transition(d3.transition().duration(250).ease(d3.easeLinear))
      }
      circlesUpdate
        .attr('transform', (d) => this.translate(d))

      // Enter
      circles.enter()
        .append('circle')
        .attr('class', 'circle')
        .attr('r', 10)
        .attr('transform', (d) => this.translate(d))

      // Exit
      circles.exit().remove()
    },

  },

  watch: {
    map() {
      // Unclear which will happen first, map ready or component mount
      this.maybeInitSVGLayer()
    }
  },

  mounted: function() {
    // Unclear which will happen first, map ready or component mount
    this.maybeInitSVGLayer()
  }

}
</script>
<style lang="scss">
svg.mapbox-d3-container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

circle {
  transition: r 0.5s ease, fill 0.5s ease;
}

circle:hover {
  fill: orange;
  r: 50;
}
</style>