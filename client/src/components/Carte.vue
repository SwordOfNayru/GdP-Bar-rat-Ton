<template>
    <div id="map" ref="map"></div>
</template>

<script>
const L = require("leaflet");

export default {
    props: {
        bars: {
            type: Array,
            require: false,
        },
    },
    data() {
        return {
            map: null,
        };
    },
    methods: {
        AddPoint(bar) {
            L.marker([bar.coordN, bar.coordE])
                .addTo(this.map)
                .on("click", this.OnClickPoint);
        },
        ClearPoint() {
            console.log(this.map);
            this.map.markers.clearLayers();
        },
        OnClickPoint(e) {
            console.log(e);
        },
    },
    mounted() {
        (this.map = L.map("map").setView(
            [49.89588303208506, 2.3035742082141315],
            60
        )),
            L.tileLayer(
                "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
                {
                    attribution:
                        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: "mapbox/streets-v11",
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken:
                        "pk.eyJ1Ijoic3dvcmRvZm5heXJ1IiwiYSI6ImNrejhveTdrMDFsMGYyb3J4bnY2NXAyM3cifQ.GrT0Y8mioqGs8wpppRUecQ",
                }
            ).addTo(this.map);
    },
    watch: {
        bar: function (newValue) {
            this.ClearPoint();
            for (let bar of newValue) {
                this.AddPoint(bar);
            }
        },
    },
};
</script>

<style>
#map {
    height: 1080px;
}
</style>